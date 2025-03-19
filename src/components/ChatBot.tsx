
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
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

type AiModel = "openai" | "claude" | "none";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
    
    // Si estamos usando IA y tenemos la API key correspondiente
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
        
        // Usar respuesta predefinida como fallback
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
        
        return;
      }
      
      setIsLoading(true);
      try {
        let response;
        if (selectedModel === "openai") {
          response = await callOpenAI(input.trim(), apiKey);
        } else {
          response = await callClaude(input.trim(), apiKey);
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
      // Usamos respuestas predefinidas
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

  const callClaude = async (userInput: string, apiKey: string): Promise<string> => {
    try {
      // Preparamos el mensaje de sistema y la conversación reciente
      let systemMessage = systemPrompt;
      
      // Extraemos los últimos 6 mensajes para contexto
      const recentMessages = messages.slice(-6);
      let conversation = "";
      
      recentMessages.forEach(msg => {
        if (msg.role === "user") {
          conversation += `Human: ${msg.content}\n\n`;
        } else if (msg.role === "assistant") {
          conversation += `Assistant: ${msg.content}\n\n`;
        }
      });
      
      // Añadimos el mensaje actual
      conversation += `Human: ${userInput}\n\nAssistant: `;
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          system: systemMessage,
          messages: [
            {
              role: "user",
              content: conversation
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('Error calling Claude:', error);
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
                {selectedModel !== "none" && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {getModelName(selectedModel)}
                  </span>
                )}
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

      {/* Modal para configurar API Keys */}
      <Dialog open={apiKeyDialogOpen} onOpenChange={setApiKeyDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Configuración del Asistente</DialogTitle>
            <DialogDescription>
              Configura el modelo de IA para el asistente virtual.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="ai-model">Modelo de IA</Label>
              <Select 
                value={selectedModel} 
                onValueChange={(value) => setSelectedModel(value as AiModel)}
              >
                <SelectTrigger id="ai-model">
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Respuestas predefinidas</SelectItem>
                  <SelectItem value="openai">OpenAI (GPT)</SelectItem>
                  <SelectItem value="claude">Anthropic (Claude)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {selectedModel === "openai" && (
              <div className="space-y-2">
                <Label htmlFor="openai-key">API Key de OpenAI</Label>
                <Input
                  id="openai-key"
                  value={openaiApiKey}
                  onChange={(e) => setOpenaiApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="col-span-3"
                />
              </div>
            )}
            
            {selectedModel === "claude" && (
              <div className="space-y-2">
                <Label htmlFor="claude-key">API Key de Claude</Label>
                <Input
                  id="claude-key"
                  value={claudeApiKey}
                  onChange={(e) => setClaudeApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  className="col-span-3"
                />
              </div>
            )}
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
              onClick={saveSettings}
              disabled={(selectedModel === "openai" && !openaiApiKey) || 
                        (selectedModel === "claude" && !claudeApiKey)}
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
