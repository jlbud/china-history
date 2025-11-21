import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { Era, ChatMessage } from '../types';
import { chatWithEra } from '../services/geminiService';

interface ChatPanelProps {
  era: Era;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ era }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `您好。我是${era.name}（${era.hanzi}）的守护灵。关于那个时代，您想了解什么？`, timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when era changes
  useEffect(() => {
    setMessages([{ 
      role: 'model', 
      text: `朝代更迭。我是${era.name}（${era.period}）的声音。请随意提问。`, 
      timestamp: Date.now() 
    }]);
  }, [era.id]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const responseText = await chatWithEra(userMsg.text, era, messages);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col items-end ${isOpen ? 'w-80 sm:w-96' : 'w-auto'}`}>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-full bg-white rounded-2xl shadow-2xl border border-stone-200 mb-4 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-stone-800 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif font-bold">{era.hanzi}之灵</h3>
              <span className="text-xs text-stone-400 block">历史向导</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-stone-50 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-br-none' 
                      : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex justify-start">
                 <div className="bg-white border border-stone-200 p-3 rounded-xl rounded-bl-none shadow-sm flex gap-1">
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="关于这个朝代..."
              className="flex-grow bg-stone-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800"
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isTyping}
              className="bg-red-700 text-white p-2 rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-800 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
        >
          <MessageCircle size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 whitespace-nowrap text-sm font-bold">
            询问历史
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatPanel;