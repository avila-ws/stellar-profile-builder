import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { predefinedResponses, quickOptions } from "./chatbot/chatbot-data";
import { ChatButton } from "./chatbot/ChatButton";
import { ChatHeader } from "./chatbot/ChatHeader";
import { ChatMessages } from "./chatbot/ChatMessages";
import { ChatInput } from "./chatbot/ChatInput";
import { useChatBot } from "./chatbot/use-chatbot";

const ChatBot: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    input, 
    setInput,
    isExpanded, 
    setIsExpanded,
    hasInteracted,
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
