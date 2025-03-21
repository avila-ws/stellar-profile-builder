import WorkExperience from "./WorkExperience";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import companyUrls from "@/config/companies";
import companyIcons from "@/config/company-icons";

const WorkHistory = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  // Convertir la respuesta de la traducción a un arreglo de experiencias
  const experienceData = tProfile('experience', { returnObjects: true });
  const experiences = Array.isArray(experienceData) ? experienceData : [];
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">{t('experience.work_history')}</h3>
      
      <div className="space-y-2">
        {experiences.map((experience, index) => {
          // Asegurarse de que achievements sea un array
          const achievements = Array.isArray(experience.achievements) 
            ? experience.achievements 
            : [];
            
          // Obtener la URL de la empresa basado en el índice
          const getCompanyUrl = () => {
            switch(index) {
              case 0: return companyUrls.r2;
              case 1: return companyUrls.b89;
              case 2: return companyUrls.bcp;
              case 3: return companyUrls.kellerWilliams;
              case 4: return companyUrls.nttData;
              default: return companyUrls.paraisoCreativo;
            }
          };
          
          // Obtener el icono de la empresa basado en el índice
          const getCompanyIcon = () => {
            switch(index) {
              case 0: return companyIcons.r2;
              case 1: return companyIcons.b89;
              case 2: return companyIcons.bcp;
              case 3: return companyIcons.kellerWilliams;
              case 4: return companyIcons.nttData;
              default: return companyIcons.paraisoCreativo;
            }
          };
            
          return (
            <WorkExperience
              key={index}
              company={`${experience.company} – ${experience.type}`}
              companyUrl={getCompanyUrl()}
              role={experience.position}
              period={experience.period}
              location={experience.location}
              icon={getCompanyIcon()}
              description={achievements}
              defaultExpanded={index < 2 && !isMobile}
              isLast={index === experiences.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkHistory;
