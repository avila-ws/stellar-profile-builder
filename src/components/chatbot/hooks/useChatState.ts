
import { useState, useEffect, useRef } from "react";
import { Message, QuickOption } from "../types";
import { predefinedResponses, quickOptions, welcomeMessage, fallbackMessage } from "../data";
import { generateResponse as callClaudeAPI } from "../api";

export const useChatState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial welcome message
      const welcomeMsg: Message = {
        id: Date.now().toString(),
        content: welcomeMessage,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
    setIsLoading(true);
    setError(null);
    
    try {
      // First try to use local logic to find a response
      const localResponse = generateLocalResponse(input.trim().toLowerCase());
      
      if (localResponse) {
        // Use local predefined response if available
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: localResponse,
            role: "assistant",
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false);
        }, 500);
      } else {
        // Use fallback message
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: fallbackMessage,
            role: "assistant",
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false);
        }, 500);
      }
    } catch (err) {
      console.error("Error generating response:", err);
      setError("Sorry, I couldn't generate a response. Please try again.");
      setIsLoading(false);
    }
  };
  
  const handleQuickOption = async (option: QuickOption) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: option.text,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Process the selected option after a slight delay
    setTimeout(() => {
      const botResponse = generateLocalResponse(option.keywords[0]);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };
  
  const generateLocalResponse = (userInput: string): string => {
    // Simple keyword matching
    for (const item of predefinedResponses) {
      if (item.keywords.some(keyword => userInput.includes(keyword))) {
        return item.response;
      }
    }
    
    // Return null if no match found
    return fallbackMessage;
  };
  
  const showQuickOptions = () => {
    return messages.length <= 2; // Only show quick options initially or after first exchange
  };
  
  return {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isExpanded,
    setIsExpanded,
    messagesEndRef,
    handleSend,
    handleQuickOption,
    showQuickOptions,
    isLoading,
    error,
    setError,
    quickOptions
  };
};
