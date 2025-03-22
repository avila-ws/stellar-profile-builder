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

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isHtml?: boolean;
};

type QuickOption = {
  id: string;
  text: string;
  keywords: string[];
  emoji: string;
};

const predefinedResponses = [
  {
    keywords: ["hello", "hi", "hey", "hola"],
    response: `<div class="space-y-2">
      <p>👋 Hi there! I'm Renzo Avila's virtual assistant.</p>
      <p>I can help you learn more about:</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>💼 His professional experience</li>
        <li>🛠️ Technical skills</li>
        <li>📱 Contact information</li>
      </ul>
      <p>What would you like to know?</p>
    </div>`
  },
  {
    keywords: ["experience", "work", "job", "experiencia", "trabajo"],
    response: `<div class="space-y-3">
      <p>🚀 <strong>DevSecOps Leadership</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>6+ years as DevSecOps Engineer</li>
        <li>Expert in CI/CD security integration</li>
        <li>ISO 27001 compliant cloud infrastructure management</li>
      </ul>
      <p>🌎 <strong>Global Impact</strong></p>
      <ul class="list-disc pl-4">
        <li>Led 20+ blockchain projects across:</li>
        <li class="ml-4">• Latin America</li>
        <li class="ml-4">• Caribbean</li>
        <li class="ml-4">• Europe</li>
      </ul>
    </div>`
  },
  {
    keywords: ["skills", "habilidades", "tecnologías", "technologies"],
    response: `<div class="space-y-3">
      <p>🛠️ <strong>Core Technical Skills:</strong></p>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <p class="font-medium">☁️ Cloud & Infrastructure</p>
          <ul class="list-disc pl-4">
            <li>AWS</li>
            <li>Terraform</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <p class="font-medium">🔒 Security</p>
          <ul class="list-disc pl-4">
            <li>ISO 27001</li>
            <li>OWASP</li>
            <li>DevSecOps</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="font-medium">💻 Programming Languages</p>
        <p class="pl-4">Python • Rust • JavaScript • TypeScript</p>
      </div>
    </div>`
  },
  {
    keywords: ["contact", "contacto", "email", "phone", "teléfono"],
    response: `<div class="space-y-3">
      <p>📫 <strong>Get in touch with Renzo:</strong></p>
      <ul class="space-y-2">
        <li>✉️ <strong>Email:</strong> renzo@avila.ws</li>
        <li>📱 <strong>Phone:</strong> +44 330 122 9696</li>
        <li>🤝 <strong>Meeting:</strong> Use the contact form on this website</li>
      </ul>
    </div>`
  },
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum"],
    response: `<div class="space-y-3">
      <p>⛓️ <strong>Blockchain Expertise</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>Led 20+ blockchain projects</li>
        <li>Enhanced security & efficiency for:</li>
        <ul class="pl-4">
          <li>• Financial applications</li>
          <li>• Enterprise solutions</li>
        </ul>
      </ul>
      <p>🌐 <strong>Global Reach:</strong> Latin America, Caribbean, and Europe</p>
    </div>`
  },
  {
    keywords: ["security", "seguridad", "iso", "devsecops"],
    response: `<div class="space-y-3">
      <p>🔒 <strong>Security Achievements:</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>ISO 27001 certification coordination</li>
        <li>50% reduction in security incidents</li>
        <li>45% improvement in software protection through automated security testing</li>
      </ul>
    </div>`
  },
  {
    keywords: ["location", "ubicación", "where", "dónde"],
    response: `<div class="space-y-2">
      <p>📍 <strong>Location:</strong></p>
      <p>Based in the beautiful city of Barcelona, Spain 🇪🇸</p>
    </div>`
  }
];

const quickOptions: QuickOption[] = [
  { id: "experience", text: "Work Experience", emoji: "💼", keywords: ["experience", "work"] },
  { id: "skills", text: "Technical Skills", emoji: "🛠️", keywords: ["skills", "technologies"] },
  { id: "contact", text: "Contact Information", emoji: "📱", keywords: ["contact", "email"] },
  { id: "blockchain", text: "Blockchain Projects", emoji: "⛓️", keywords: ["blockchain", "crypto"] },
  { id: "security", text: "Security Experience", emoji: "🔒", keywords: ["security", "devsecops"] },
  { id: "location", text: "Location", emoji: "📍", keywords: ["location", "where"] }
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `<div class="space-y-2">
        <p>👋 Hi there! I'm Renzo Avila's virtual assistant.</p>
        <p>I can help you learn more about Renzo's profile. Feel free to:</p>
        <ul class="list-disc pl-4 space-y-1">
          <li>Select one of the quick options below</li>
          <li>Or type your question in the chat</li>
        </ul>
      </div>`,
      isHtml: true,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current?.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  const handleSend = () => {
    if (!input.trim()) return;
    const sanitizedInput = sanitizeText(input);
    const userMessage: Message = {
      id: Date.now().toString(),
      content: sanitizedInput,
      role: "user",
      timestamp: new Date()
    };
    console.log('User message:', userMessage);
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
      console.log('Bot response:', botMessage);
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };
  
  useEffect(() => {
    (window as any).quickOptionClick = (optionId: string) => {
      const option = quickOptions.find(opt => opt.id === optionId);
      if (option) {
        handleQuickOption(option);
      }
    };

    return () => {
      delete (window as any).quickOptionClick;
    };
  }, []);

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
    
    let fallbackResponse = `<div class="space-y-2">
      <p>🤔 I'm not sure how to help with that specific query.</p>
      <p>You can ask me about:</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>💼 Professional experience</li>
        <li>🛠️ Technical skills</li>
        <li>📱 Contact information</li>
        <li>⛓️ Blockchain projects</li>
        <li>🔒 Security expertise</li>
        <li>📍 Location</li>
      </ul>
      <p class="mt-3 text-sm">Feel free to select a topic or ask any other question!</p>
    </div>`;
    
    if (showOptions) {
      fallbackResponse = fallbackResponse.replace('</div>', `
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
    
    return fallbackResponse;
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const showQuickOptions = () => {
    return messages.length <= 2;
  };
  
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
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
          aria-label="Open assistance chat"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/0 animate-ping" />
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      ) : (
        <Card className="w-80 md:w-96 shadow-xl border-primary/20">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-medium">Virtual Assistant</CardTitle>
              <div className="flex items-center space-x-1">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className={cn("h-4 w-4 transition-transform", {
                      "transform rotate-180": !isExpanded
                    })} />
                  </Button>
                </CollapsibleTrigger>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CollapsibleContent>
              <CardContent className="p-0">
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
              </CardContent>
              
              <CardFooter className="p-3 pt-0 flex flex-col">
                <div className="flex w-full items-center space-x-2">
                  <Textarea
                    id="chat-message"
                    name="chat-message"
                    placeholder="Type a message..."
                    className="min-h-10 flex-1 resize-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <Button 
                    size="icon"
                    onClick={handleSend}
                    disabled={input.trim() === ""}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {hasInteracted && (
                  <div className="w-full flex justify-start mt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs" 
                      onClick={showAllTopics}
                    >
                      Show all topics
                    </Button>
                  </div>
                )}
              </CardFooter>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
