
import React from 'react';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleTrigger } from '@/components/ui/collapsible';
import { Key, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AiModel } from '../types';

interface ChatHeaderProps {
  isExpanded: boolean;
  selectedModel: AiModel;
  getModelName: (model: AiModel) => string;
  onOpenSettings: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  isExpanded,
  selectedModel,
  getModelName,
  onOpenSettings,
  onClose
}) => {
  return (
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
          onClick={onOpenSettings}
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
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;
