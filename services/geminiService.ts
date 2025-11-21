import { GoogleGenAI } from "@google/genai";
import { Era, HistoryCardData, AiInsight, Source } from "../types";

// Initialize the AI client with the API key from the environment
// IMPORTANT: The API Key must be available in process.env.API_KEY
const apiKey = process.env.API_KEY || 'YOUR_API_KEY_HERE'; 
const ai = new GoogleGenAI({ apiKey });

export const generateCardDetails = async (card: HistoryCardData, era: Era): Promise<AiInsight> => {
  try {
    // When using tools like googleSearch, we cannot use responseSchema or responseMimeType: 'application/json'.
    // We must ask the model to output JSON in the prompt and parse it manually.
    const prompt = `
      Search the web for detailed historical information about "${card.title}" (${card.hanzi}) from the ${era.name} dynasty of China.
      
      Based on the search results, provide a response in strict JSON format with the following structure:
      {
        "summary": "A 2-3 sentence engaging summary of the topic in Chinese (Simplified).",
        "secretFact": "A lesser-known, interesting fact about this topic in Chinese (Simplified)."
      }
      
      Do not include any markdown formatting (like \`\`\`json). Just return the raw JSON string.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        // Enable Google Search Grounding
        tools: [{ googleSearch: {} }], 
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text from Gemini");
    
    // Extract sources from grounding metadata
    const sources: Source[] = [];
    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      response.candidates[0].groundingMetadata.groundingChunks.forEach(chunk => {
        if (chunk.web?.uri && chunk.web?.title) {
          sources.push({
            title: chunk.web.title,
            url: chunk.web.uri
          });
        }
      });
    }

    // Clean and parse JSON (remove potential markdown code blocks if the model ignores instruction)
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanText);

    return {
      summary: parsed.summary,
      secretFact: parsed.secretFact,
      sources: sources
    };

  } catch (error) {
    console.error("Error generating details:", error);
    return {
      summary: "历史浩瀚，但此刻卷轴空白。请稍后再试。",
      secretFact: "智者千虑，必有一失。",
      sources: []
    };
  }
};

export const chatWithEra = async (
  message: string, 
  era: Era, 
  chatHistory: { role: 'user' | 'model'; text: string }[]
) => {
  try {
    const systemInstruction = `
      You are a knowledgeable guide living in the ${era.name} dynasty of China (${era.period}).
      Your persona matches the ${era.name} era context.
      Answer questions about your time period, culture, and events in China.
      Keep answers concise (under 100 words) but immersive.
      Refer to the user as 'Traveler' (or '行者' in Chinese).
      ALWAYS respond in Chinese (Simplified).
    `;

    // Construct history for the chat format
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction }
    });

    const history = chatHistory.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    const prompt = `
      History so far:
      ${chatHistory.map(m => `${m.role}: ${m.text}`).join('\n')}
      
      User: ${message}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { systemInstruction }
    });

    return response.text || "众神缄默。";

  } catch (error) {
    console.error("Error in chat:", error);
    return "抱歉，时之风扰乱了我的声音。";
  }
};