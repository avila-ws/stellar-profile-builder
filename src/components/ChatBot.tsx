
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

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

type QuickOption = {
  id: string;
  text: string;
  keywords: string[];
};

const predefinedResponses = [
  {
    keywords: ["hello", "hi", "hey", "hola"],
    response: "¡Hola! Soy el asistente virtual de Renzo Avila. ¿En qué puedo ayudarte? Puedes preguntarme sobre su experiencia, habilidades o cómo contactarle."
  },
  {
    keywords: ["experience", "work", "job", "experiencia", "trabajo"],
    response: "Renzo tiene más de 6 años de experiencia como DevSecOps Engineer, integrando seguridad en pipelines CI/CD y gestionando infraestructuras cloud cumpliendo con ISO 27001. Ha liderado más de 20 proyectos blockchain en América Latina, el Caribe y Europa."
  },
  {
    keywords: ["skills", "habilidades", "tecnologías", "technologies"],
    response: "Las principales habilidades de Renzo incluyen AWS, Seguridad (ISO 27001, OWASP), Blockchain, CI/CD, Terraform, Kubernetes, Docker, y lenguajes como Python, Rust, JavaScript y TypeScript."
  },
  {
    keywords: ["contact", "contacto", "email", "phone", "teléfono"],
    response: "Puedes contactar a Renzo por email en RENZO@AVILA.WS, por teléfono al +44 330 122 9696, o agendar una reunión usando el formulario de contacto en esta web."
  },
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum"],
    response: "Renzo ha liderado más de 20 proyectos blockchain, mejorando la seguridad y eficiencia para aplicaciones financieras y empresariales en América Latina, el Caribe y Europa. Tiene experiencia en diversas plataformas blockchain."
  },
  {
    keywords: ["security", "seguridad", "iso", "devsecops"],
    response: "Renzo ha coordinado certificaciones ISO 27001, reduciendo incidentes de seguridad en un 50% y ha desarrollado pruebas de seguridad automatizadas, mejorando la protección del software en un 45%."
  },
  {
    keywords: ["location", "ubicación", "where", "dónde"],
    response: "Renzo está ubicado en Barcelona, España."
  }
];

const quickOptions: QuickOption[] = [
  { id: "experience", text: "Experiencia laboral", keywords: ["experience", "trabajo"] },
  { id: "skills", text: "Habilidades técnicas", keywords: ["skills", "habilidades"] },
  { id: "contact", text: "Información de contacto", keywords: ["contact", "contacto"] },
  { id: "blockchain", text: "Proyectos blockchain", keywords: ["blockchain", "crypto"] },
  { id: "security", text: "Experiencia en seguridad", keywords: ["security", "seguridad"] },
  { id: "location", text: "Ubicación", keywords: ["location", "ubicación"] }
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "¡Hola! Soy el asistente virtual de Renzo Avila. ¿En qué puedo ayudarte? Puedes seleccionar una opción o escribir tu pregunta.",
        role: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSend = () => {
    if (input.trim() === "") return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Process user input and generate response after a slight delay
    setTimeout(() => {
      const botResponse = generateResponse(input.trim().toLowerCase());
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
    
    // Process the selected option after a slight delay
    setTimeout(() => {
      const botResponse = generateResponse(option.keywords[0]);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };
  
  const generateResponse = (userInput: string): string => {
    // Simple keyword matching
    for (const item of predefinedResponses) {
      if (item.keywords.some(keyword => userInput.includes(keyword))) {
        return item.response;
      }
    }
    
    // Default fallback response
    return "Lo siento, no puedo responder a eso en este momento. ¿Puedes intentar con otra pregunta sobre la experiencia, habilidades o contacto de Renzo?";
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
    return messages.length <= 2; // Only show quick options initially or after first exchange
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
            <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-medium">Asistente Virtual</CardTitle>
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
                <div className="h-80 overflow-y-auto p-3 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
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
                  ))}
                  
                  {showQuickOptions() && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {quickOptions.map((option) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleQuickOption(option)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              <CardFooter className="p-3 pt-0">
                <div className="flex w-full items-center space-x-2">
                  <Textarea
                    placeholder="Escribe un mensaje..."
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
              </CardFooter>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
