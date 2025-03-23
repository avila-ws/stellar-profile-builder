import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Message, QuickOption } from "./chatbot-types";

interface ChatMessagesProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
  showQuickOptions: () => boolean;
  hasInteracted: boolean;
  quickOptions: QuickOption[];
  handleQuickOption: (option: QuickOption) => void;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  messagesEndRef,
  showQuickOptions,
  hasInteracted,
  quickOptions,
  handleQuickOption
}) => {
  // Format timestamp for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className={`${hasInteracted ? 'h-[70vh] max-h-[400px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[1000px]' : 'h-80'} overflow-y-auto p-3 space-y-4 transition-all duration-300`}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn("flex flex-col", {
            "items-end": message.role === "user",
            "items-start": message.role === "assistant"
          })}
        >
          <div
            className={cn("max-w-[85%] rounded-2xl px-4 py-3", {
              "bg-primary text-primary-foreground": message.role === "user",
              "bg-muted": message.role === "assistant"
            })}
          >
            {message.isHtml ? (
              <div 
                className="prose prose-sm dark:prose-invert max-w-none [&_ul]:mb-0 [&_p]:mb-0 [&_div]:last:mb-0"
                dangerouslySetInnerHTML={{ __html: message.content }} 
              />
            ) : (
              <p className="text-sm">{message.content}</p>
            )}
          </div>
          <span className="text-xs text-muted-foreground mt-1 px-1">
            {formatTime(message.timestamp)}
          </span>
        </div>
      ))}
      
      {showQuickOptions() && !hasInteracted && (
        <div className="flex flex-wrap gap-2 mt-4">
          {quickOptions.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => handleQuickOption(option)}
            >
              {option.emoji} {option.text}
            </Button>
          ))}
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}; 