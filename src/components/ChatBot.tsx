import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { sanitizeHTML, sanitizeText } from "@/lib/security";
import { predefinedResponses, quickOptions } from "@/components/chatbot/chatbot-data";
import { Message, QuickOption } from "@/components/chatbot/chatbot-types";
import { ChatButton } from "@/components/chatbot/ChatButton";
import { ChatHeader } from "@/components/chatbot/ChatHeader";
import { ChatMessages } from "@/components/chatbot/ChatMessages";
import { ChatInput } from "@/components/chatbot/ChatInput";
import { useChatBot } from "@/components/chatbot/use-chatbot";

const ChatBot: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    setMessages,
    input, 
    setInput,
    isExpanded, 
    setIsExpanded,
    hasInteracted,
    setHasInteracted,
    messagesEndRef,
    handleSend,
    handleQuickOption,
    handleKeyDown,
    showQuickOptions,
    showAllTopics
  } = useChatBot(predefinedResponses, quickOptions);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <ChatButton onClick={() => setIsOpen(true)} />
      ) : (
        <Card className="w-80 md:w-96 shadow-xl border-primary/20">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <ChatHeader 
              isExpanded={isExpanded} 
              onClose={() => setIsOpen(false)} 
            />
            
            <CollapsibleContent>
              <CardContent className="p-0">
                <ChatMessages 
                  messages={messages}
                  messagesEndRef={messagesEndRef}
                  showQuickOptions={showQuickOptions}
                  hasInteracted={hasInteracted}
                  quickOptions={quickOptions}
                  handleQuickOption={handleQuickOption}
                />
              </CardContent>
              
              <CardFooter className="p-3 pt-0 flex flex-col">
                <ChatInput 
                  input={input}
                  setInput={setInput}
                  handleSend={handleSend}
                  handleKeyDown={handleKeyDown}
                  hasInteracted={hasInteracted}
                  showAllTopics={showAllTopics}
                />
              </CardFooter>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
