
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const LanguageSection = () => {
  const isMobile = useIsMobile();
  const [languagesOpen, setLanguagesOpen] = useState(false);
  
  useEffect(() => {
    setLanguagesOpen(!isMobile);
  }, [isMobile]);
  
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-md transition-shadow duration-300" 
      onClick={() => setLanguagesOpen(!languagesOpen)}
    >
      <Collapsible open={languagesOpen} onOpenChange={setLanguagesOpen}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center">
            <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
            Languages
          </h3>
          <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
            {languagesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
        
        <CollapsibleContent>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>English (Fluent)</li>
            <li>Portuguese (Fluent)</li>
            <li>Spanish (Native)</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default LanguageSection;
