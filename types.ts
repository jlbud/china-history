
export enum EraId {
  SHANG = 'shang',
  ZHOU = 'zhou',
  QIN = 'qin',
  HAN = 'han',
  TANG = 'tang',
  SONG = 'song',
  MING = 'ming',
  QING = 'qing'
}

export interface Era {
  id: EraId;
  name: string;
  hanzi: string;
  period: string; // e.g., "1600 BCE – 1046 BCE"
  startYear: number; // For sorting/charting
  endYear: number;
  description: string;
  color: string;
}

export interface HistoryCardData {
  id: string;
  eraId: EraId;
  title: string;
  hanzi: string;
  type: 'figure' | 'event' | 'culture' | 'artifact';
  year: string;
  shortDescription: string;
  imageSeed: number; // For picsum fallback
  imageUrl?: string; // Specific historical image
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Source {
  title: string;
  url: string;
}

export interface AiInsight {
  summary: string;
  secretFact: string;
  sources?: Source[];
}
