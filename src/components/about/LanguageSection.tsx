import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSection = () => {
  const isMobile = useIsMobile();
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  useEffect(() => {
    setLanguagesOpen(!isMobile);
  }, [isMobile]);
  
  const languages = tProfile('languages', { returnObjects: true }) || [];
  
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-md transition-shadow duration-300" 
      onClick={() => setLanguagesOpen(!languagesOpen)}
    >
      <Collapsible open={languagesOpen} onOpenChange={setLanguagesOpen}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center">
            <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
            {t('about.languages')}
          </h3>
          <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
            {languagesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">{t('accessibility.toggle')}</span>
          </Button>
        </div>
        
        <CollapsibleContent>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            {Array.isArray(languages) && languages.map((lang, index) => (
              <li key={index}>{lang.name} ({lang.level})</li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default LanguageSection;
