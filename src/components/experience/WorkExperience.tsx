import { Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";

interface WorkExperienceProps {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isLast?: boolean;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
}

const WorkExperience = ({
  company,
  companyUrl,
  role,
  period,
  location,
  description,
  isLast = false,
  icon = <Briefcase className="h-5 w-5 text-primary" />,
  defaultExpanded = false
}: WorkExperienceProps) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded && !isMobile);
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsExpanded(defaultExpanded && !isMobile);
  }, [isMobile, defaultExpanded]);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  const highlightDescription = (text: string) => {
    const keyTerms = [
      "security", "blockchain", "DevOps", "AWS", "led", "developed", "designed", 
      "implemented", "reduced", "increased", "enhanced", "improved", "50%", "45%", 
      "40%", "35%", "30%", "25%", "20%", "ISO 27001", "React.js", "integrated", 
      "automated", "infrastructure", "cybersecurity", "vulnerabilities", "compliance"
    ];
    
    let result = text;
    keyTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, (match) => `<span class="font-medium text-primary">${match}</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };
  
  return (
    <div className="relative pl-12 pb-8">
      {!isLast && <div className="absolute top-0 left-5 h-full w-px bg-border"></div>}
      <div className="absolute top-1 left-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      
      <Accordion 
        type="single" 
        collapsible 
        className="mt-0 border-none" 
        value={isExpanded ? "description" : ""}
        onValueChange={(value) => setIsExpanded(value === "description")}
      >
        <AccordionItem value="description" className="border-none">
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              {companyUrl ? (
                <a 
                  href={companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={t('accessibility.visit_company_website', { company })}
                >
                  {company}
                </a>
              ) : (
                <span>{company}</span>
              )}
            </h3>
            <div 
              className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-1 cursor-pointer hover:text-primary transition-colors"
              onClick={toggleExpand}
            >
              <span className="font-medium">{role}</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">{period}</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">{location}</span>
            </div>
          </div>
          
          <AccordionTrigger 
            className="py-1 text-sm text-primary hover:no-underline justify-start p-0"
          >
            {isExpanded ? t('experience.hide_details') : t('experience.show_details')}
          </AccordionTrigger>
          
          <AccordionContent>
            <ul 
              className="list-disc pl-5 space-y-2 mt-2"
              role="list"
            >
              {description.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {highlightDescription(item)}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WorkExperience;
