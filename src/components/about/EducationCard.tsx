import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsOpen(defaultOpen && !isMobile);
  }, [isMobile, defaultOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div 
      className="rounded-md p-3 -m-2 transition-all cursor-pointer bg-card hover:bg-accent/50 hover:shadow-md border border-transparent hover:border-border/60"
      onClick={toggleAccordion}
    >
      <Accordion 
        type="single" 
        collapsible 
        className="border-none" 
        value={isOpen ? "education" : ""}
        onValueChange={(value) => setIsOpen(value === "education")}
      >
        <AccordionItem value="education" className="border-none">
          <div className="flex items-center justify-between">
            <h4 className="font-medium flex items-center text-left">
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors" 
                onClick={e => e.stopPropagation()}
                aria-label={t('accessibility.visit_institution_website', { institution })}
              >
                {institution}
              </a>
            </h4>
            <AccordionTrigger className="hover:no-underline py-0 p-0 flex">
              <span className="sr-only">{t('accessibility.toggle')}</span>
            </AccordionTrigger>
          </div>
          
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              {degrees.map((degree, index) => (
                <li key={index}>
                  <span className="font-semibold text-primary">{degree.title}</span>{" "}
                  <span className="text-muted-foreground">- {degree.description}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {!isOpen && (
        <div className="mt-1 text-muted-foreground text-sm">
          {t('education.click_details', { count: degrees.length })}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
