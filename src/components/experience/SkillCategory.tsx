
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({
  title,
  skills,
  icon
}: SkillCategoryProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  // Reset open state when device type changes
  useEffect(() => {
    setIsOpen(false);
  }, [isMobile]);
  
  // Determine how many skills to show when collapsed based on device
  const previewCount = isMobile ? 4 : 8;
  
  return (
    <Card 
      className="p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-lg flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </h4>
          <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
        
        <CollapsibleContent className="space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
            {skills.map(skill => <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>)}
          </div>
        </CollapsibleContent>
        
        {!isOpen && <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
            {skills.slice(0, previewCount).map(skill => <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>)}
            {skills.length > previewCount && (
              <Button 
                variant="ghost" 
                className="text-sm px-2 py-1 h-auto min-h-0 font-medium gradient relative overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                +{skills.length - previewCount} more
              </Button>
            )}
          </div>}
      </Collapsible>
    </Card>
  );
};

export default SkillCategory;
