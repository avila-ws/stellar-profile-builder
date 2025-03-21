import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import EducationCard from "./EducationCard";
import { useLanguage } from "@/hooks/useLanguage";
import educationUrls from "@/config/education";

const EducationSection = () => {
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  const educationData = [
    {
      institution: tProfile('education.0.institution'),
      url: educationUrls.centralUniversity,
      degrees: [
        {
          title: tProfile('education.0.degree'),
          description: tProfile('education.0.description')
        },
        {
          title: tProfile('education.1.degree'),
          description: tProfile('education.1.description')
        }
      ],
      defaultOpen: true
    },
    {
      institution: tProfile('education.2.institution'),
      url: educationUrls.forensicAcademy,
      degrees: [
        {
          title: tProfile('education.2.degree'),
          description: tProfile('education.2.description')
        },
        {
          title: tProfile('education.3.degree'),
          description: tProfile('education.3.description')
        }
      ]
    }
  ];
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <GraduationCap className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
        {t('education.title')}
      </h3>
      
      <div className="space-y-5">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            institution={education.institution}
            url={education.url}
            degrees={education.degrees}
            defaultOpen={education.defaultOpen}
          />
        ))}
      </div>
    </Card>
  );
};

export default EducationSection;
