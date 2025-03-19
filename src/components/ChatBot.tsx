
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { MessageCircle } from "lucide-react";
import { useChatState } from "./chatbot/hooks/useChatState";
import ChatHeader from "./chatbot/components/ChatHeader";
import ChatMessages from "./chatbot/components/ChatMessages";
import ChatInput from "./chatbot/components/ChatInput";
import SettingsDialog from "./chatbot/components/SettingsDialog";
import ErrorAlert from "./chatbot/components/ErrorAlert";
import { quickOptions } from "./chatbot/data";

const ChatBot: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isExpanded,
    setIsExpanded,
    openaiApiKey,
    setOpenaiApiKey,
    claudeApiKey,
    setClaudeApiKey,
    apiKeyDialogOpen,
    setApiKeyDialogOpen,
    isLoading,
    selectedModel,
    setSelectedModel,
    handleSend,
    saveSettings,
    getModelName,
    handleQuickOption
  } = useChatState();
  
  const [error, setError] = useState<{title: string, message: string} | null>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend().catch(err => {
        setError({
          title: "Error en el envío",
          message: "No se pudo procesar tu mensaje. Por favor, intenta de nuevo."
        });
        console.error("Send error:", err);
      });
    }
  };
  
  const showQuickOptions = () => {
    return messages.length <= 2;
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80 md:w-96 shadow-xl border-primary/20">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <ChatHeader 
              isExpanded={isExpanded}
              selectedModel={selectedModel}
              getModelName={getModelName}
              onOpenSettings={() => setApiKeyDialogOpen(true)}
              onClose={() => setIsOpen(false)}
            />
            
            <CollapsibleContent>
              {error && (
                <div className="px-4 pt-2">
                  <ErrorAlert 
                    title={error.title} 
                    description={error.message} 
                    onClose={() => setError(null)}
                  />
                </div>
              )}
              
              <ChatMessages 
                messages={messages}
                quickOptions={quickOptions}
                handleQuickOption={handleQuickOption}
                showQuickOptions={showQuickOptions()}
              />
              
              <ChatInput 
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                isLoading={isLoading}
                handleKeyDown={handleKeyDown}
              />
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}

      <SettingsDialog 
        open={apiKeyDialogOpen}
        onOpenChange={setApiKeyDialogOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        openaiApiKey={openaiApiKey}
        setOpenaiApiKey={setOpenaiApiKey}
        claudeApiKey={claudeApiKey}
        setClaudeApiKey={setClaudeApiKey}
        saveSettings={saveSettings}
      />
    </div>
  );
};

export default ChatBot;
