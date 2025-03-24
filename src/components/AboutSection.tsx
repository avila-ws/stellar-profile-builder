import EducationSection from "@/components/about/EducationSection";
import LanguageSection from "@/components/about/LanguageSection";
import KeyAchievements from "@/components/about/KeyAchievements";
import CompaniesWorked from "@/components/about/CompaniesWorked";
import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              {t('about.description_1')}
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              {t('about.description_2')}
            </p>
            
            <div className="space-y-8 mt-8">
              <EducationSection />
              <LanguageSection />
            </div>
          </div>
          
          <div className="space-y-6">
            <KeyAchievements />
            <CompaniesWorked />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
