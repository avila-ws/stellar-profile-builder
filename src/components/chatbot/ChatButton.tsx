import React from "react";
import Button from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <Button 
      onClick={onClick}
      className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
      aria-label="Open assistance chat"
    >
      <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/0 animate-ping" />
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
    </Button>
  );
}; 