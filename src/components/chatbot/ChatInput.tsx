import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  hasInteracted: boolean;
  showAllTopics: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  handleSend,
  handleKeyDown,
  hasInteracted,
  showAllTopics
}) => {
  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Textarea
          id="chat-message"
          name="chat-message"
          placeholder="Type a message..."
          className="min-h-10 flex-1 resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button 
          size="icon"
          onClick={handleSend}
          disabled={input.trim() === ""}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      {hasInteracted && (
        <div className="w-full flex justify-start mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs" 
            onClick={showAllTopics}
          >
            Show all topics
          </Button>
        </div>
      )}
    </>
  );
}; 