
import { Briefcase, Server, Lock, Code, Database, Bitcoin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperienceProps {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isLast?: boolean;
}

const WorkExperience = ({ company, companyUrl, role, period, location, description, isLast = false }: WorkExperienceProps) => {
  return (
    <div className="relative pl-12 pb-8">
      {!isLast && (
        <div className="absolute top-0 left-5 h-full w-px bg-border"></div>
      )}
      <div className="absolute top-1 left-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Briefcase className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {company}
          </a>
        ) : (
          company
        )}
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-1">
        <span className="font-medium">{role}</span>
        <span className="hidden sm:block text-muted-foreground">•</span>
        <span className="text-muted-foreground">{period}</span>
        <span className="hidden sm:block text-muted-foreground">•</span>
        <span className="text-muted-foreground">{location}</span>
      </div>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground">{item}</li>
        ))}
      </ul>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => (
  <Card className="p-6">
    <h4 className="font-semibold text-lg mb-3 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>
      ))}
    </div>
  </Card>
);

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
                company="R2 – NeoBank"
                companyUrl="https://r2.co/"
                role="DevSecOps Engineer"
                period="Oct 2022 - Present"
                location="Mexico"
                description={[
                  "Led ISO 27001 certification, reducing security incidents by 50%",
                  "Developed automated security testing, improving protection by 45%",
                  "Conducted security audits, increasing threat detection by 30%",
                  "Designed robust cloud security policies ensuring compliance"
                ]}
              />
              
              <WorkExperience 
                company="B89 – NeoBank"
                companyUrl="https://www.b89.io/"
                role="DevSecOps Engineer"
                period="Oct 2020 - Sep 2022"
                location="Peru"
                description={[
                  "Established security infrastructure, reducing vulnerabilities by 50%",
                  "Directed blockchain projects with 60% throughput increase",
                  "Led cross-functional teams, enhancing efficiency by 35%",
                  "Automated security in CI/CD pipelines with compliance enforcement"
                ]}
              />
              
              <WorkExperience 
                company="BCP – Bank"
                companyUrl="https://www.viabcp.com/"
                role="DevSecOps Engineer"
                period="Oct 2019 - Sep 2020"
                location="Peru"
                description={[
                  "Led cybersecurity initiatives with 30% system uptime increase",
                  "Enhanced software security, reducing vulnerabilities by 25%",
                  "Coordinated cross-departmental security efforts, reducing deployment times by 30%"
                ]}
              />
              
              <WorkExperience 
                company="Keller Williams Realty"
                companyUrl="https://www.kw.com/"
                role="Front-End Software Engineer"
                period="Oct 2018 - Sep 2019"
                location="United States"
                description={[
                  "Optimized CRM and ERP systems with React.js, boosting user experience by 30%",
                  "Enhanced front-end security and API integrations, improving performance by 25%",
                  "Aligned UX/UI development with secure DevOps practices, improving applications by 20%"
                ]}
              />
              
              <WorkExperience 
                company="NTT DATA - Consulting Firm"
                companyUrl="https://pe.nttdata.com/"
                role="Blockchain Full-Stack Software Engineer"
                period="Oct 2015 - Sep 2018"
                location="Peru"
                description={[
                  "Led over 20 blockchain projects across Latin America, the Caribbean, and Europe",
                  "Designed scalable blockchain architectures, increasing efficiency by 40%",
                  "Managed blockchain infrastructure, optimizing performance by 25%"
                ]}
              />
              
              <WorkExperience 
                company="Paraiso Creativo - Consulting Firm"
                companyUrl="https://web.archive.org/web/20170914185910/http://paraisocreativo.com/"
                role="Android Software Engineer"
                period="Oct 2013 - Sep 2015"
                location="Venezuela"
                description={[
                  "Developed secure Android applications with geolocation and payment systems",
                  "Optimized app security and performance, increasing user satisfaction by 40%",
                  "Implemented secure software development practices, reducing errors by 20%"
                ]}
                isLast
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            <div className="space-y-6">
              <SkillCategory
                title="AWS Cloud & DevOps"
                icon={<Server className="h-5 w-5 text-primary" />}
                skills={["EC2", "EKS", "Lambda", "DynamoDB", "CloudFormation", "Cognito", "S3", "CloudTrail", "CloudWatch", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana"]}
              />
              
              <SkillCategory
                title="Security & Compliance"
                icon={<Lock className="h-5 w-5 text-primary" />}
                skills={["Imperva", "Snyk", "Veracode", "Qualys", "OWASP", "Fortify", "Okta", "Prisma Cloud", "Burp Suite", "Checkmarx", "ISO 27001", "WAF", "Security Hub"]}
              />
              
              <SkillCategory
                title="Development"
                icon={<Code className="h-5 w-5 text-primary" />}
                skills={["JavaScript", "TypeScript", "Python", "Rust", "Go", "React", "Node.js", "Express.js", "Next.js", "Django", "Flask", "Git", "CI/CD", "REST APIs"]}
              />
              
              <SkillCategory
                title="Databases"
                icon={<Database className="h-5 w-5 text-primary" />}
                skills={["PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "Elasticsearch", "DynamoDB", "RDS", "Redshift"]}
              />
              
              <SkillCategory
                title="Blockchain"
                icon={<Bitcoin className="h-5 w-5 text-primary" />}
                skills={["Ethereum", "Solidity", "web3.js", "Hyperledger", "Smart Contracts", "Truffle", "Ganache", "Remix", "Infura", "Metamask"]}
              />
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-base mb-3">More Technologies</h4>
                  <p className="text-sm text-muted-foreground">
                    My complete tech stack includes 150+ tools and technologies. View my resume for the complete list including: Batch, CloudSearch, SNS, SQS, QLDB, Pinpoint, X-Ray, API Gateway, SageMaker, Control Tower, VPC, Route 53, Macie, Inspector, Security Lake, GuardDuty, Detective, Swift, Kotlin, and many more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
