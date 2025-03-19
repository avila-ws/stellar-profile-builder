
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
    // Prepare the conversation history
    let conversation = "";
    
    const recentMessages = messages.slice(-6);
    recentMessages.forEach(msg => {
      if (msg.role === "user") {
        conversation += `Human: ${msg.content}\n\n`;
      } else if (msg.role === "assistant") {
        conversation += `Assistant: ${msg.content}\n\n`;
      }
    });
    
    // Add the current user message
    conversation += `Human: ${userInput}\n\nAssistant: `;
    
    // Direct API call to Claude - This will now be handled client-side
    // Create payload according to Claude API specs
    const payload = {
      model: 'claude-3-haiku-20240307',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: userInput
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    };
    
    // Make request to a dedicated backend endpoint that will forward to Claude
    // This avoids CORS issues by having the server make the request
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey,
        payload
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Claude API error:', errorText);
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error calling Claude:', error);
    throw error;
  }
};

export const generateResponse = (userInput: string, predefinedResponses: any[]): string => {
  for (const item of predefinedResponses) {
    if (item.keywords.some((keyword: string) => userInput.toLowerCase().includes(keyword.toLowerCase()))) {
      return item.response;
    }
  }
  
  return "Lo siento, no puedo responder a eso en este momento. ¿Puedes intentar con otra pregunta sobre la experiencia, habilidades o contacto de Renzo?";
};
