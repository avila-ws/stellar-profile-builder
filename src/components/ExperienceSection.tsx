
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface WorkExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string[];
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
      <ul className="list-disc pl-5 space-y-1 mt-2">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground">{item}</li>
        ))}
      </ul>
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
                role="DevSecOps Engineer"
                period="Oct 2022 - Present"
                description={[
                  "Led ISO 27001 certification, reducing security incidents by 50%",
                  "Developed automated security testing, improving protection by 45%",
                  "Conducted security audits, increasing threat detection by 30%",
                  "Designed robust cloud security policies ensuring compliance"
                ]}
              />
              
              <WorkExperience 
                company="B89 – NeoBank Peru"
                role="DevSecOps Engineer"
                period="Oct 2020 - Sep 2022"
                description={[
                  "Established security infrastructure, reducing vulnerabilities by 50%",
                  "Directed blockchain projects with 60% throughput increase",
                  "Led cross-functional teams, enhancing efficiency by 35%",
                  "Automated security in CI/CD pipelines with compliance enforcement"
                ]}
              />
              
              <WorkExperience 
                company="BCP – Bank Peru"
                role="DevSecOps Engineer"
                period="Oct 2019 - Sep 2020"
                description={[
                  "Led cybersecurity initiatives with 30% system uptime increase",
                  "Enhanced software security, reducing vulnerabilities by 25%",
                  "Coordinated cross-departmental security efforts, reducing deployment times by 30%"
                ]}
              />
              
              <WorkExperience 
                company="Previous Experience"
                role="Various Engineering Roles"
                period="2013 - 2019"
                description={[
                  "Front-End Engineer at Keller Williams Realty (2018-2019)",
                  "Blockchain Full-Stack Engineer at NTT DATA (2015-2018)",
                  "Android Software Engineer at Paraiso Creativo (2013-2015)"
                ]}
                isLast
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">AWS Cloud & DevOps</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["EC2", "EKS", "Lambda", "DynamoDB", "CloudFormation", "Cognito", "S3", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Security & Compliance</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["Imperva", "Snyk", "Veracode", "Qualys", "OWASP", "Fortify", "Okta", "Prisma Cloud", "Burp Suite", "Checkmarx"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Development</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["JavaScript", "TypeScript", "Python", "Rust", "Go", "React", "Node.js", "Express.js", "Next.js", "Django", "Flask", "Git", "CI/CD"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3">Blockchain & Databases</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["Ethereum", "Solidity", "web3.js", "Hyperledger", "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "Elasticsearch"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
