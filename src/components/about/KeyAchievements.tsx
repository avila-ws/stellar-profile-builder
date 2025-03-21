import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const KeyAchievements = () => {
  const { t } = useLanguage();
  
  const achievements = [
    {
      title: t('about.achievements.iso.title'),
      description: t('about.achievements.iso.description')
    },
    {
      title: t('about.achievements.code.title'),
      description: t('about.achievements.code.description')
    },
    {
      title: t('about.achievements.blockchain.title'),
      description: t('about.achievements.blockchain.description')
    },
    {
      title: t('about.achievements.cicd.title'),
      description: t('about.achievements.cicd.description')
    }
  ];
  
  return (
    <Card className="p-6 border shadow-sm">
      <h3 className="text-xl font-semibold mb-6">{t('about.achievements.title')}</h3>
      
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <span className="font-medium">{achievement.title}</span>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default KeyAchievements;
