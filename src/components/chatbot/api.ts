
import { systemPrompt } from './types';
import type { Message } from './types';

export const callOpenAI = async (userInput: string, apiKey: string, messages: Message[]): Promise<string> => {
  try {
    const messageHistory: Array<{role: string, content: string}> = [
      { role: "system", content: systemPrompt }
    ];
    
    const recentMessages = messages.slice(-6);
    recentMessages.forEach(msg => {
      messageHistory.push({
        role: msg.role,
        content: msg.content
      });
    });
    
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

export const callClaude = async (userInput: string, apiKey: string, messages: Message[]): Promise<string> => {
  try {
    let systemMessage = systemPrompt;
    
    const recentMessages = messages.slice(-6);
    let conversation = "";
    
    recentMessages.forEach(msg => {
      if (msg.role === "user") {
        conversation += `Human: ${msg.content}\n\n`;
      } else if (msg.role === "assistant") {
        conversation += `Assistant: ${msg.content}\n\n`;
      }
    });
    
    conversation += `Human: ${userInput}\n\nAssistant: `;
    
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const anthropicApiUrl = "https://api.anthropic.com/v1/messages";
    
    const response = await fetch(corsProxy + anthropicApiUrl, {
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

export const generateResponse = (userInput: string, predefinedResponses: any[]): string => {
  for (const item of predefinedResponses) {
    if (item.keywords.some((keyword: string) => userInput.includes(keyword))) {
      return item.response;
    }
  }
  
  return "Lo siento, no puedo responder a eso en este momento. ¿Puedes intentar con otra pregunta sobre la experiencia, habilidades o contacto de Renzo?";
};
