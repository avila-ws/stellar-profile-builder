import { Building2, Building, Home, Palmtree, Landmark, Server } from "lucide-react";
import WorkExperience from "./WorkExperience";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";

const WorkHistory = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  // Convertir la respuesta de la traducción a un arreglo
  const experienceData = tProfile('experience', { returnObjects: true });
  const experiences = Array.isArray(experienceData) ? experienceData : [];
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">{t('experience.work_history')}</h3>
      
      <div className="space-y-2">
        {experiences.map((experience, index) => (
          <WorkExperience
            key={index}
            company={`${experience.company} – ${experience.type}`}
            companyUrl={index === 0 ? "https://r2.co/" : 
                        index === 1 ? "https://www.b89.io/" : 
                        index === 2 ? "https://www.viabcp.com/" : 
                        index === 3 ? "https://www.kw.com/" : 
                        index === 4 ? "https://pe.nttdata.com/" : 
                        "https://web.archive.org/web/20170914185910/http://paraisocreativo.com/"}
            role={experience.position}
            period={experience.period}
            location={experience.location}
            icon={index === 0 ? <Building2 className="h-5 w-5 text-primary" /> : 
                  index === 1 ? <Building className="h-5 w-5 text-primary" /> : 
                  index === 2 ? <Landmark className="h-5 w-5 text-primary" /> : 
                  index === 3 ? <Home className="h-5 w-5 text-primary" /> : 
                  index === 4 ? <Server className="h-5 w-5 text-primary" /> : 
                  <Palmtree className="h-5 w-5 text-primary" />}
            description={experience.achievements}
            defaultExpanded={index < 2 && !isMobile}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
