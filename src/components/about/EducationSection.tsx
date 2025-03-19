
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import EducationCard from "./EducationCard";

const educationData = [
  {
    institution: "Central University of Technology",
    url: "https://web.archive.org/web/20110806134524/http://www.unitec.edu.ve/index5.jsp",
    degrees: [
      {
        title: "B.Sc. in Systems Engineering",
        description: "Specialized in IT-driven business optimization and strategic data management"
      },
      {
        title: "B.Sc. in Business Administration and Management",
        description: "Competent in operational efficiency and strategic administrative leadership"
      }
    ],
    defaultOpen: true
  },
  {
    institution: "Forensic Science and Cybersecurity Academy",
    url: "https://ujap.edu.ve/",
    degrees: [
      {
        title: "Diploma in Forensic Science and Criminalistics",
        description: "Specialized in forensic techniques and criminal analysis"
      },
      {
        title: "Diploma in Forensic Computing and Cybercrime",
        description: "Trained in cybercrime investigation and forensic computing"
      }
    ]
  }
];

const EducationSection = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <GraduationCap className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
        Education
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
