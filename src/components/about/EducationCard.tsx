
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface EducationCardProps {
  institution: string;
  url: string;
  degrees: Array<{
    title: string;
    description: string;
  }>;
  defaultOpen?: boolean;
}

const EducationCard = ({
  institution,
  url,
  degrees,
  defaultOpen = false
}: EducationCardProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(defaultOpen && !isMobile);
  
  useEffect(() => {
    setIsOpen(defaultOpen && !isMobile);
  }, [isMobile, defaultOpen]);
  
  return (
    <div 
      className="cursor-pointer hover:bg-accent/50 rounded-md p-2 -m-2 transition-colors" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <h4 className="font-medium flex items-center justify-between">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors" 
          onClick={e => e.stopPropagation()}
        >
          {institution}
        </a>
        <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">Toggle</span>
        </Button>
      </h4>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            {degrees.map((degree, index) => (
              <li key={index}>
                <span className="font-semibold text-primary">{degree.title}</span>{" "}
                <span className="text-muted-foreground">- {degree.description}</span>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
      
      {!isOpen && (
        <div className="mt-1 text-muted-foreground text-sm">
          Click to see details about {degrees.length} degree{degrees.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
