
import { useState, useEffect } from 'react';
import { Message, AiModel, QuickOption } from '../types';
import { useToast } from '@/hooks/use-toast';
import { generateResponse } from '../api';
import { predefinedResponses } from '../data';
import { callOpenAI, callClaude } from '../api';

export const useChatState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const { toast } = useToast();
  const [openaiApiKey, setOpenaiApiKey] = useState<string>(() => localStorage.getItem("openai_api_key") || "");
  const [claudeApiKey, setClaudeApiKey] = useState<string>(() => localStorage.getItem("claude_api_key") || "");
  const [apiKeyDialogOpen, setApiKeyDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<AiModel>(() => {
    const storedModel = localStorage.getItem("selected_model");
    if (!storedModel) return "none";
    return storedModel as AiModel;
  });
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "¡Hola! Soy el asistente virtual de Renzo Avila. ¿En qué puedo ayudarte? Puedes seleccionar una opción o escribir tu pregunta.",
        role: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const saveSettings = () => {
    localStorage.setItem("openai_api_key", openaiApiKey);
    localStorage.setItem("claude_api_key", claudeApiKey);
    localStorage.setItem("selected_model", selectedModel);
    setApiKeyDialogOpen(false);
    
    toast({
      title: "Configuración guardada",
      description: selectedModel === "none" 
        ? "Se usarán respuestas predefinidas" 
        : `Se usará ${selectedModel === "openai" ? "OpenAI" : "Claude"} para las respuestas.`
    });
  };

  const getModelName = (model: AiModel): string => {
    switch(model) {
      case "openai": return "OpenAI";
      case "claude": return "Claude";
      case "none": return "Predefinido";
      default: return "IA";
    }
  };

  const handleSend = async () => {
    if (input.trim() === "") return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    if (selectedModel !== "none") {
      const apiKey = selectedModel === "openai" ? openaiApiKey : claudeApiKey;
      if (!apiKey) {
        toast({
          title: "Error",
          description: `No hay API key configurada para ${getModelName(selectedModel)}. Configurando modo predefinido.`,
          variant: "destructive"
        });
        setSelectedModel("none");
        localStorage.setItem("selected_model", "none");
        
        // Fall back to predefined responses
        useDefaultResponse(input.trim());
        return;
      }
      
      setIsLoading(true);
      try {
        let response;
        if (selectedModel === "openai") {
          response = await callOpenAI(input.trim(), apiKey, messages);
        } else {
          // If Claude API is selected but we don't have a backend endpoint yet
          // Fall back to predefined responses temporarily
          try {
            response = await callClaude(input.trim(), apiKey, messages);
          } catch (claudeError) {
            console.error('Claude API error, falling back to predefined responses:', claudeError);
            toast({
              title: "Error con Claude",
              description: "No se pudo conectar a la API de Claude. Usando respuestas predefinidas por ahora.",
              variant: "destructive"
            });
            
            // Fall back to predefined responses
            useDefaultResponse(input.trim());
            setIsLoading(false);
            return;
          }
        }
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          role: "assistant",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error con IA:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Lo siento, hubo un error al procesar tu mensaje con ${getModelName(selectedModel)}. Por favor, intenta de nuevo o verifica tu API key.`,
          role: "assistant",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        toast({
          title: "Error",
          description: `No se pudo obtener respuesta de ${getModelName(selectedModel)}. Verifica tu API key.`,
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      useDefaultResponse(input.trim());
    }
  };

  // Helper function to use predefined responses
  const useDefaultResponse = (inputText: string) => {
    setTimeout(() => {
      const botResponse = generateResponse(inputText.toLowerCase(), predefinedResponses);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickOption = (option: QuickOption) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: option.text,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse = generateResponse(option.keywords[0], predefinedResponses);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    setMessages,
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
  };
};
