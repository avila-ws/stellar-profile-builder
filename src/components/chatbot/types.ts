
export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface QuickOption {
  id: string;
  text: string;
  keywords: string[];
}
