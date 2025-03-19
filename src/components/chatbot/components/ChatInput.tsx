
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  isLoading: boolean;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  handleSend,
  isLoading,
  handleKeyDown
}) => {
  return (
    <CardFooter className="p-3 pt-0">
      <div className="flex w-full items-center space-x-2">
        <Textarea
          placeholder="Escribe un mensaje..."
          className="min-h-10 flex-1 resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <Button 
          size="icon"
          onClick={handleSend}
          disabled={input.trim() === "" || isLoading}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>
    </CardFooter>
  );
};

export default ChatInput;
