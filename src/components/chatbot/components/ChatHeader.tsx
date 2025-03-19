
import React from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CollapsibleTrigger } from "@/components/ui/collapsible";

interface ChatHeaderProps {
  isExpanded: boolean;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isExpanded, onClose }) => {
  return (
    <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
      <CardTitle className="text-base font-medium">Virtual Assistant</CardTitle>
      <div className="flex items-center space-x-1">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", {
                "transform rotate-180": !isExpanded,
              })}
            />
          </Button>
        </CollapsibleTrigger>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;
