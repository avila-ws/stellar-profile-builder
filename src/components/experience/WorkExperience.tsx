import { Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";

// Interfaz para los datos de una experiencia laboral
export interface WorkExperienceData {
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

// Componente para resaltar términos técnicos en el texto
interface HighlightedTextProps {
  text: string;
}

const HighlightedText = ({ text }: HighlightedTextProps) => {
  const { t } = useLanguage();
  
  // Obtener los términos clave desde las traducciones
  const termsFromTranslation = t('highlightTerms.technical', { returnObjects: true });
  const keyTerms = Array.isArray(termsFromTranslation) ? termsFromTranslation : [];
  
  let result = text;
  keyTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, (match) => `<span class="font-medium text-primary">${match}</span>`);
  });
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

// Componente para la información de la compañía
interface CompanyInfoProps {
  company: string;
  companyUrl?: string;
}

const CompanyInfo = ({ company, companyUrl }: CompanyInfoProps) => {
  const { t } = useLanguage();
  
  return (
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
  );
};

// Componente para la información del rol
interface RoleInfoProps {
  role: string;
  period: string;
  location: string;
  onClick: () => void;
}

const RoleInfo = ({ role, period, location, onClick }: RoleInfoProps) => {
  return (
    <div 
      className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-1 cursor-pointer hover:text-primary transition-colors"
      onClick={onClick}
    >
      <span className="font-medium">{role}</span>
      <span className="hidden sm:block text-muted-foreground">•</span>
      <span className="text-muted-foreground">{period}</span>
      <span className="hidden sm:block text-muted-foreground">•</span>
      <span className="text-muted-foreground">{location}</span>
    </div>
  );
};

// Componente para la descripción detallada
interface DetailedDescriptionProps {
  description: string[];
  isExpanded: boolean;
  toggleExpand: () => void;
}

const DetailedDescription = ({ description, isExpanded, toggleExpand }: DetailedDescriptionProps) => {
  const { t } = useLanguage();
  
  return (
    <>
      <AccordionTrigger 
        className="py-1 text-sm text-primary hover:no-underline justify-start p-0"
        onClick={toggleExpand}
      >
        {isExpanded ? t('experience.hide_details') : t('experience.show_details')}
      </AccordionTrigger>
      
      <AccordionContent>
        <ul 
          className="list-disc pl-5 space-y-2 cursor-pointer hover:text-primary/80 transition-colors"
          onClick={toggleExpand}
          role="list"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleExpand();
            }
          }}
        >
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              <HighlightedText text={item} />
            </li>
          ))}
        </ul>
      </AccordionContent>
    </>
  );
};

// Componente principal para una tarjeta de experiencia individual
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
}: WorkExperienceData) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded && !isMobile);
  
  useEffect(() => {
    setIsExpanded(defaultExpanded && !isMobile);
  }, [isMobile, defaultExpanded]);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
            <CompanyInfo company={company} companyUrl={companyUrl} />
            <RoleInfo 
              role={role} 
              period={period} 
              location={location} 
              onClick={toggleExpand} 
            />
          </div>
          
          <DetailedDescription 
            description={description}
            isExpanded={isExpanded}
            toggleExpand={toggleExpand}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WorkExperience;
