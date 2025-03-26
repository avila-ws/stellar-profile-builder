import { Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LanguageSection = () => {
  const isMobile = useIsMobile();
  const [languagesOpen, setLanguagesOpen] = useState(!isMobile);
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  useEffect(() => {
    setLanguagesOpen(!isMobile);
  }, [isMobile]);
  
  const languages = tProfile('languages', { returnObjects: true }) || [];

  const toggleAccordion = () => {
    setLanguagesOpen(!languagesOpen);
  };
  
  return (
    <Card className="p-6">
      <Accordion 
        type="single" 
        collapsible 
        className="border-none" 
        value={languagesOpen ? "languages" : ""}
        onValueChange={(value) => setLanguagesOpen(value === "languages")}
      >
        <AccordionItem value="languages" className="border-none">
          <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
            <h3 className="text-xl font-semibold flex items-center">
              <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
              {t('about.languages')}
            </h3>
            <AccordionTrigger className="hover:no-underline py-0 p-0 flex">
              <span className="sr-only">{t('accessibility.toggle')}</span>
            </AccordionTrigger>
          </div>
          
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              {Array.isArray(languages) && languages.map((lang, index) => (
                <li key={index}>{lang.name} ({lang.level})</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {!languagesOpen && (
        <div className="mt-1 text-muted-foreground text-sm">
          {t('languages.click_to_view')}
        </div>
      )}
    </Card>
  );
};

export default LanguageSection;
