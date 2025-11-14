import WorkExperience from "./WorkExperience";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import companyUrls from "@/config/companies";
import companyIcons from "@/config/company-icons";

type CompanyKey = keyof typeof companyUrls;

const companyKeyMap: Record<string, CompanyKey> = {
  IAG: "iag",
  R2: "r2",
  B89: "b89",
  BCP: "bcp",
  "NTT DATA": "nttData",
  "NTT DATA EUROPE & LATAM": "nttData"
};

const normalizeCompanyName = (company?: string) => company?.trim().toUpperCase() ?? "";

const getCompanyKey = (company?: string): CompanyKey => {
  const normalized = normalizeCompanyName(company);
  return companyKeyMap[normalized] ?? "paraisoCreativo";
};

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
          
          const companyKey = getCompanyKey(experience.company);
          const companyUrl = companyUrls[companyKey] ?? companyUrls.paraisoCreativo;
          const companyIcon = companyIcons[companyKey] ?? companyIcons.paraisoCreativo;
            
          return (
            <WorkExperience
              key={index}
              company={`${experience.company} – ${experience.type}`}
              companyUrl={companyUrl}
              role={experience.position}
              period={experience.period}
              location={experience.location}
              icon={companyIcon}
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
