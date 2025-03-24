import { useState, useRef, useEffect } from "react";
import { sanitizeHTML, sanitizeText } from "@/lib/security";
import { Message, QuickOption, PredefinedResponse } from "./chatbot-types";
import { welcomeMessage, fallbackResponse } from "./chatbot-data";

// Extender la interfaz Window para incluir quickOptionClick
declare global {
  interface Window {
    quickOptionClick?: (optionId: string) => void;
  }
}

export const useChatBot = (
  predefinedResponses: PredefinedResponse[],
  quickOptions: QuickOption[]
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: Date.now().toString(),
        content: welcomeMessage,
        isHtml: true,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, messages.length]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current?.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Set up global click handler for quick options in HTML
  useEffect(() => {
    window.quickOptionClick = (optionId: string) => {
      const option = quickOptions.find(opt => opt.id === optionId);
      if (option) {
        handleQuickOption(option);
      }
    };

    return () => {
      delete window.quickOptionClick;
    };
  }, []);
  
  // Format timestamp for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Generate response based on user input
  const generateResponse = (userInput: string, showOptions: boolean = false): string => {
    for (const item of predefinedResponses) {
      if (item.keywords.some(keyword => userInput.includes(keyword))) {
        let finalResponse = item.response;
        if (showOptions) {
          finalResponse = finalResponse.replace('</div>', `
            <div class="mt-4 border-t pt-3">
              <p class="text-sm font-medium">Would you like to know more about:</p>
              <div class="flex flex-wrap gap-2 mt-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('experience')">💼 Experience</button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('skills')">🛠️ Skills</button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('contact')">📱 Contact</button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('blockchain')">⛓️ Blockchain</button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('security')">🔒 Security</button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('location')">📍 Location</button>
              </div>
            </div>
          </div>`);
        }
        return finalResponse;
      }
    }
    
    let response = fallbackResponse;
    
    if (showOptions) {
      response = response.replace('</div>', `
        <div class="mt-4 border-t pt-3">
          <p class="text-sm font-medium">Quick options:</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('experience')">💼 Experience</button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('skills')">🛠️ Skills</button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs" onclick="window.quickOptionClick('blockchain')">⛓️ Blockchain</button>
          </div>
        </div>
      </div>`);
    }
    
    return response;
  };
  
  // Handle quick option selection
  const handleQuickOption = (option: QuickOption) => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    const userMessage: Message = {
      id: Date.now().toString(),
      content: sanitizeText(option.text),
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse = generateResponse(option.keywords[0], true);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: sanitizeHTML(botResponse),
        role: "assistant",
        timestamp: new Date(),
        isHtml: true
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };
  
  // Handle sending a message
  const handleSend = () => {
    if (!input.trim()) return;
    const sanitizedInput = sanitizeText(input);
    const userMessage: Message = {
      id: Date.now().toString(),
      content: sanitizedInput,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    setTimeout(() => {
      const botResponse = generateResponse(sanitizedInput.trim().toLowerCase(), true);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: sanitizeHTML(botResponse),
        role: "assistant",
        timestamp: new Date(),
        isHtml: true
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };
  
  // Handle keydown events (e.g., Enter to send)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  // Check if quick options should be shown
  const showQuickOptions = () => {
    return messages.length <= 2;
  };
  
  // Show all topics in chat
  const showAllTopics = () => {
    const allTopicsMessage: Message = {
      id: Date.now().toString(),
      content: `<div class="space-y-3">
        <p>📁 <strong>All available topics:</strong></p>
        <div class="grid grid-cols-2 gap-2">
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('experience')">💼 <span class="ml-2">Work Experience</span></button>
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('skills')">🛠️ <span class="ml-2">Technical Skills</span></button>
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('contact')">📱 <span class="ml-2">Contact Information</span></button>
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('blockchain')">⛓️ <span class="ml-2">Blockchain Projects</span></button>
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('security')">🔒 <span class="ml-2">Security Experience</span></button>
          <button class="text-left px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center" onclick="window.quickOptionClick('location')">📍 <span class="ml-2">Location</span></button>
        </div>
      </div>`,
      role: "assistant",
      timestamp: new Date(),
      isHtml: true
    };
    setMessages(prev => [...prev, allTopicsMessage]);
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
    hasInteracted,
    setHasInteracted,
    messagesEndRef,
    formatTime,
    handleSend,
    handleQuickOption,
    handleKeyDown,
    showQuickOptions,
    showAllTopics
  };
}; 