import { Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSection = () => {
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  const languages = tProfile('languages', { returnObjects: true }) || [];
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
        {t('about.languages')}
      </h3>
      
      <ul className="list-disc pl-5 space-y-1 mt-2">
        {Array.isArray(languages) && languages.map((lang, index) => (
          <li key={index}>{lang.name} ({lang.level})</li>
        ))}
      </ul>
    </Card>
  );
};

export default LanguageSection;
