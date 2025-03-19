
import React, { useRef, useEffect } from 'react';
import { CardContent } from '@/components/ui/card';
import MessageBubble from './MessageBubble';
import QuickOptions from './QuickOptions';
import { Message, QuickOption } from '../types';

interface ChatMessagesProps {
  messages: Message[];
  quickOptions: QuickOption[];
  handleQuickOption: (option: QuickOption) => void;
  showQuickOptions: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  quickOptions,
  handleQuickOption,
  showQuickOptions
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <CardContent className="p-0">
      <div className="h-80 overflow-y-auto p-3 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            formatTime={formatTime}
          />
        ))}
        
        {showQuickOptions && (
          <QuickOptions 
            options={quickOptions} 
            onOptionSelect={handleQuickOption} 
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </CardContent>
  );
};

export default ChatMessages;
