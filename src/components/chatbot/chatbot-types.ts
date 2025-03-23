export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isHtml?: boolean;
};

export type QuickOption = {
  id: string;
  text: string;
  keywords: string[];
  emoji: string;
};

export type PredefinedResponse = {
  keywords: string[];
  response: string;
}; 