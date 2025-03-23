import React from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  isExpanded: boolean;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isExpanded, 
  onClose 
}) => {
  return (
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
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
}; 