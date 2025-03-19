
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  formatTime: (date: Date) => string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, formatTime }) => {
  return (
    <div
      className={cn("flex flex-col", {
        "items-end": message.role === "user",
        "items-start": message.role === "assistant"
      })}
    >
      <div
        className={cn("max-w-[85%] rounded-2xl px-3 py-2 text-sm", {
          "bg-primary text-primary-foreground": message.role === "user",
          "bg-muted": message.role === "assistant"
        })}
      >
        {message.content}
      </div>
      <span className="text-xs text-muted-foreground mt-1">
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
};

export default MessageBubble;
