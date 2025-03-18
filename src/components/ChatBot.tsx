
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ChevronDown, Key, Loader2 } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  timestamp: Date;
};

type QuickOption = {
  id: string;
  text: string;
  keywords: string[];
};

// Información del perfil para el prompt del sistema
const systemPrompt = `
Eres un asistente virtual para el portfolio web de Renzo Avila. Responde preguntas ÚNICAMENTE sobre la siguiente información:

- Renzo tiene más de 6 años de experiencia como DevSecOps Engineer
- Ha integrado seguridad en pipelines CI/CD y gestiona infraestructuras cloud cumpliendo con ISO 27001
- Ha liderado más de 20 proyectos blockchain en América Latina, el Caribe y Europa
- Sus habilidades incluyen AWS, Seguridad (ISO 27001, OWASP), Blockchain, CI/CD, Terraform, Kubernetes, Docker, Python, Rust, JavaScript y TypeScript
- Se puede contactar por email en RENZO@AVILA.WS o por teléfono al +44 330 122 9696
- Está ubicado en Barcelona, España

NO proporciones información que no esté en este contexto. Si te preguntan algo fuera de este ámbito, indica amablemente que solo puedes ofrecer información sobre Renzo Avila, su experiencia, habilidades o contacto.

Responde en el mismo idioma en que te pregunten.
`;

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
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem("openai_api_key") || "");
  const [apiKeyDialogOpen, setApiKeyDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usingAI, setUsingAI] = useState<boolean>(() => {
    return localStorage.getItem("using_ai") === "true";
  });
  
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

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("openai_api_key", key);
    setApiKeyDialogOpen(false);
    toast({
      title: "API Key guardada",
      description: "Tu API Key ha sido guardada para futuras conversaciones."
    });
  };

  const toggleAIMode = (enabled: boolean) => {
    setUsingAI(enabled);
    localStorage.setItem("using_ai", enabled.toString());
    toast({
      title: enabled ? "Modo IA activado" : "Modo predefinido activado",
      description: enabled 
        ? "Ahora las respuestas utilizarán ChatGPT" 
        : "Ahora se utilizarán respuestas predefinidas"
    });
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
    
    // Si estamos usando IA y tenemos una API key, usamos OpenAI
    if (usingAI && apiKey) {
      setIsLoading(true);
      try {
        const response = await callOpenAI(input.trim(), apiKey);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          role: "assistant",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o verifica tu API key.",
          role: "assistant",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        toast({
          title: "Error",
          description: "No se pudo obtener respuesta de OpenAI. Verifica tu API key.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      // Usamos respuestas predefinidas si no estamos usando IA o no hay API key
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
    }
  };
  
  const callOpenAI = async (userInput: string, apiKey: string): Promise<string> => {
    try {
      // Creamos la lista de mensajes incluyendo el prompt de sistema
      const messageHistory: Array<{role: string, content: string}> = [
        { role: "system", content: systemPrompt }
      ];
      
      // Añadimos los últimos 6 mensajes de la conversación para contexto
      const recentMessages = messages.slice(-6);
      recentMessages.forEach(msg => {
        messageHistory.push({
          role: msg.role,
          content: msg.content
        });
      });
      
      // Añadimos el mensaje actual
      messageHistory.push({ role: "user", content: userInput });
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messageHistory,
          temperature: 0.7,
          max_tokens: 500
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw error;
    }
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
              <CardTitle className="text-base font-medium flex items-center">
                Asistente Virtual
                {usingAI && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">IA</span>}
              </CardTitle>
              <div className="flex items-center space-x-1">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setApiKeyDialogOpen(true)}
                  title="Configurar API Key"
                >
                  <Key className="h-4 w-4" />
                </Button>
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
                    disabled={isLoading}
                  />
                  <Button 
                    size="icon"
                    onClick={handleSend}
                    disabled={input.trim() === "" || isLoading}
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </CardFooter>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}

      {/* Modal para configurar API Key */}
      <Dialog open={apiKeyDialogOpen} onOpenChange={setApiKeyDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Configuración del Asistente</DialogTitle>
            <DialogDescription>
              Ingresa tu API key de OpenAI para utilizar el modo IA.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="col-span-3"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="useAI"
                checked={usingAI}
                onChange={(e) => toggleAIMode(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="useAI" className="text-sm font-medium">
                Usar ChatGPT para las respuestas
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setApiKeyDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              onClick={() => saveApiKey(apiKey)}
              disabled={!apiKey && usingAI}
            >
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;
