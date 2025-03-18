
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const WorkExperience = ({ company, role, period, description, isLast = false }: WorkExperienceProps) => {
  return (
    <div className="relative pl-12 pb-8">
      {!isLast && (
        <div className="absolute top-0 left-5 h-full w-px bg-border"></div>
      )}
      <div className="absolute top-1 left-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Briefcase className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{company}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-1">
        <span className="font-medium">{role}</span>
        <span className="hidden sm:block text-muted-foreground">•</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Work History</h3>
            
            <div className="space-y-2">
              <WorkExperience 
                company="R2 – NeoBank Mexico"
                role="DevSecOps Lead Engineer"
                period="2021 - Present"
                description="Leading security integration for CI/CD pipelines, implementing automated vulnerability scanning, and managing cloud infrastructure security for a rapidly growing fintech platform."
              />
              
              <WorkExperience 
                company="B89 – NeoBank Peru"
                role="Senior DevSecOps Engineer"
                period="2019 - 2021"
                description="Designed and maintained secure infrastructure for a digital banking platform, implementing security controls and ensuring compliance with financial regulations."
              />
              
              <WorkExperience 
                company="BCP – Bank Peru"
                role="DevOps Engineer"
                period="2017 - 2019"
                description="Managed deployment pipelines and infrastructure automation, helping transform traditional banking systems toward a more agile and secure delivery model."
                isLast
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "AWS", level: "Expert", percentage: "95%" },
                { name: "Docker", level: "Expert", percentage: "90%" },
                { name: "Kubernetes", level: "Advanced", percentage: "85%" },
                { name: "CI/CD Pipelines", level: "Expert", percentage: "95%" },
                { name: "Terraform", level: "Advanced", percentage: "80%" },
                { name: "Security Automation", level: "Expert", percentage: "90%" },
                { name: "Python", level: "Advanced", percentage: "85%" },
                { name: "Bash", level: "Advanced", percentage: "80%" },
              ].map((skill, index) => (
                <div key={index} className="bg-card p-5 rounded-lg border">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
