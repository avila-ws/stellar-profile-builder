import { Briefcase, Server, Lock, Code, Database, Bitcoin, ChevronDown, ChevronUp, Building2, Building, Home, Palmtree, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface WorkExperienceProps {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isLast?: boolean;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
}

const WorkExperience = ({
  company,
  companyUrl,
  role,
  period,
  location,
  description,
  isLast = false,
  icon = <Briefcase className="h-5 w-5 text-primary" />,
  defaultExpanded = false
}: WorkExperienceProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  const highlightDescription = (text: string) => {
    const keyTerms = [
      "security", "blockchain", "DevOps", "AWS", "led", "developed", "designed", 
      "implemented", "reduced", "increased", "enhanced", "improved", "50%", "45%", 
      "40%", "35%", "30%", "25%", "20%", "ISO 27001", "React.js", "integrated", 
      "automated", "infrastructure", "cybersecurity", "vulnerabilities", "compliance"
    ];
    
    let result = text;
    keyTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, (match) => `<span class="font-medium text-primary">${match}</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };
  
  return (
    <div className="relative pl-12 pb-8">
      {!isLast && <div className="absolute top-0 left-5 h-full w-px bg-border"></div>}
      <div className="absolute top-1 left-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      
      <Accordion type="single" collapsible className="mt-0 border-none" value={isExpanded ? "description" : ""}>
        <AccordionItem value="description" className="border-none">
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              {companyUrl ? (
                <a 
                  href={companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {company}
                </a>
              ) : (
                <span>{company}</span>
              )}
            </h3>
            <div 
              className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-1 cursor-pointer hover:text-primary transition-colors"
              onClick={toggleExpand}
            >
              <span className="font-medium">{role}</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">{period}</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">{location}</span>
            </div>
          </div>
          
          <AccordionTrigger 
            className="py-1 text-sm text-primary hover:no-underline justify-start p-0"
            onClick={toggleExpand}
          >
            {isExpanded ? "Hide details" : "Show details"}
          </AccordionTrigger>
          
          <AccordionContent>
            <ul 
              className="list-disc pl-5 space-y-2 mt-2 cursor-pointer hover:text-primary/80 transition-colors"
              onClick={toggleExpand}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleExpand();
                }
              }}
            >
              {description.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {highlightDescription(item)}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({
  title,
  skills,
  icon
}: SkillCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card 
      className="p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-lg flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </h4>
          <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
        
        <CollapsibleContent className="space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
            {skills.map(skill => <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>)}
          </div>
        </CollapsibleContent>
        
        {!isOpen && <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
            {skills.slice(0, 8).map(skill => <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{skill}</span>)}
            {skills.length > 8 && <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">+{skills.length - 8} more</span>}
          </div>}
      </Collapsible>
    </Card>
  );
};

const ExperienceSection = () => {
  return <section id="experience" className="py-20">
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
                icon={<Building2 className="h-5 w-5 text-primary" />} 
                description={[
                  "Led and coordinated the ISO 27001 certification, reducing security incidents by 50% and enhancing AWS security with robust endpoint protection and incident management policies", 
                  "Developed automated security testing and integrated advanced code analysis, improving software protection by 45% and reducing production vulnerabilities by 25%", 
                  "Conducted security audits and proactive risk assessments, increasing threat detection capabilities by 30% and ensuring faster incident response, reducing potential attack impact by 20%", 
                  "Designed and enforced robust cloud security policies, ensuring compliance with industry standards and fortifying AWS IAM governance to mitigate unauthorized access risks"
                ]}
                defaultExpanded={true}
              />
              
              <WorkExperience 
                company="B89 – NeoBank" 
                companyUrl="https://www.b89.io/" 
                role="DevSecOps Engineer" 
                period="Oct 2020 - Sep 2022" 
                location="Peru" 
                icon={<Building className="h-5 w-5 text-primary" />} 
                description={[
                  "Established and fortified B89's security infrastructure, reducing vulnerabilities by 50% and integrating comprehensive security measures in fintech applications, enhancing overall system resilience", 
                  "Directed key blockchain projects, managing infrastructure across multiple blockchain protocols, resulting in a 60% increase in transaction throughput and a 40% decrease in operational costs", 
                  "Led cross-functional teams to integrate advanced security into financial solutions, enhancing operational efficiency by 35% and improving quality metrics by 30%", 
                  "Automated security processes within CI/CD pipelines, embedding compliance enforcement, vulnerability scanning, and security gates into the development lifecycle"
                ]} 
              />
              
              <WorkExperience 
                company="BCP – Bank" 
                companyUrl="https://www.viabcp.com/" 
                role="DevSecOps Engineer" 
                period="Oct 2019 - Sep 2020" 
                location="Peru" 
                icon={<Landmark className="h-5 w-5 text-primary" />} 
                description={[
                  "Led cybersecurity initiatives, collaborating with departments to oversee cloud-based applications and new implementations, ensuring optimal standards and resulting in a 30% increase in system uptime", 
                  "Enhanced software security by integrating advanced code analysis techniques, boosting protection standards by 35% and reducing production code vulnerabilities by 25%", 
                  "Coordinated cross-departmental efforts, deploying and securing new banking applications and systems, aligning with BCP's strategic goals, leading to a 30% reduction in deployment times"
                ]} 
              />
              
              <WorkExperience 
                company="Keller Williams Realty" 
                companyUrl="https://www.kw.com/" 
                role="Front-End Software Engineer" 
                period="Oct 2018 - Sep 2019" 
                location="United States" 
                icon={<Home className="h-5 w-5 text-primary" />} 
                description={[
                  "Optimized CRM and ERP systems with React.js, collaborating with DevOps to automate security checks and streamline workflows, boosting user experience by 30%", 
                  "Enhanced front-end security and API integrations, working with DevOps to improve CI/CD pipelines, increasing system resilience and performance by 25%", 
                  "Aligned UX/UI development with secure DevOps practices, ensuring automated testing, compliance enforcement, and seamless deployments, improving business applications by 20%"
                ]} 
              />
              
              <WorkExperience 
                company="NTT DATA - Consulting Firm" 
                companyUrl="https://pe.nttdata.com/" 
                role="Blockchain Software Engineer" 
                period="Oct 2015 - Sep 2018" 
                location="Peru" 
                icon={<Server className="h-5 w-5 text-primary" />} 
                description={[
                  "Led over 20 blockchain projects, enhancing security and efficiency for financial and enterprise applications across Latin America, the Caribbean, and Europe", 
                  "Designed and deployed scalable blockchain architectures, improving data integrity, security, and operational processes, increasing efficiency by 40% and reducing errors by 30%", 
                  "Managed blockchain infrastructure and innovation, optimizing performance by 25%, ensuring seamless deployment, scalability, and reliability for enterprise-grade solutions"
                ]} 
              />
              
              <WorkExperience 
                company="Paraiso Creativo - Consulting Firm" 
                companyUrl="https://web.archive.org/web/20170914185910/http://paraisocreativo.com/" 
                role="Android Software Engineer" 
                period="Oct 2013 - Sep 2015" 
                location="Venezuela" 
                icon={<Palmtree className="h-5 w-5 text-primary" />} 
                description={[
                  "Developed and launched secure Android applications, integrating geolocation and payment systems, enhancing user engagement by 10% and operational efficiency", 
                  "Optimized application security and performance, incorporating secure API integrations and encryption protocols, leading to a 40% increase in user satisfaction", 
                  "Collaborated with cross-functional teams, implementing best practices in secure software development, improving app reliability and reducing errors by 20%"
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
                skills={[
                  "EC2", "EKS", "Lambda", "Batch", "CloudSearch", "KMS", "SNS", "SQS", "Blockchain", "QLDB", "Pinpoint", 
                  "DynamoDB", "RDS", "CloudShell", "X-Ray", "API Gateway", "SageMaker", "Control Tower", 
                  "CloudTrail", "CloudWatch", "CloudFormation", "VPC", "ELB", "VPN", "Route 53", "Macie", 
                  "Inspector", "Security Lake", "GuardDuty", "Detective", "Cognito", "WAF", "Secrets Manager", 
                  "Security Hub", "Shield", "CloudHSM", "IAM Identity Center", "Audit Manager", "EBS", "S3", 
                  "Glacier", "Docker", "Kubernetes", "Docker registry", "Jenkins", "JumpCloud", "Prometheus", 
                  "Terraform", "Grafana", "Argo CD", "SSH", "MSK", "Fargate", "CodeBuild", "CodePipeline", 
                  "App Runner"
                ]} 
              />
              
              <SkillCategory 
                title="Security & Compliance" 
                icon={<Lock className="h-5 w-5 text-primary" />} 
                skills={[
                  "Imperva", "Synk", "Veracode", "Qualys", "Fluid Attacks", "Fortify", "Sonatype", 
                  "SonarCloud", "Okta", "Vanta", "Anchore", "Synopsys Black Duck", "Trendmicro", 
                  "OWASP", "Acunetix", "Burp Suite", "Checkmarx", "Prisma Cloud", "ISO 27001"
                ]} 
              />
              
              <SkillCategory 
                title="Development" 
                icon={<Code className="h-5 w-5 text-primary" />} 
                skills={[
                  "JavaScript", "TypeScript", "Java", "Python", "Rust", "Go", "C#", "PHP", "Ruby", 
                  "SQL", "Visual Basic", "Swift", "Kotlin", "HTML/CSS", "Bash", "Dart", "Node.js", 
                  "Postman", "Git", "Gitlab", "Github", "BitBucket", "Visual Studio Code", "CloudFlare", "JSON", 
                  "VIM", "Nano", "Heroku", "Selenium", "Webpack", "Firebase Crashlytics", "NPM", "Google Workspace", 
                  "React", "React.js", "React Native", "Express.js", "Next", "Ionic", "Angular", "Electron", 
                  "Laravel", "Symfony", "Rails", "Vue.js", "jQuery", "NativeScript", "Django", "Flask", 
                  "Flutter", "Pytest", "Jest", "Mocha", "Jasmine", "Trello", "Slack", "Shortcut", "Jira", 
                  "BambooHR", "ClickUp", "Zeplin", "Miro", "Figma", "Kafka", "FastAPI", "Nuxt.js", "NestJS", "Hugo"
                ]} 
              />
              
              <SkillCategory 
                title="Databases" 
                icon={<Database className="h-5 w-5 text-primary" />} 
                skills={[
                  "MongoDB", "PostgreSQL", "MySQL", "SnowFlake", "SQL Server", "DBeaver", "Liquibase", 
                  "TiDB", "MariaDB", "Metabase", "Tableau", "Airflow", "GraphQL", "BigQuery", "Redis", 
                  "Elasticsearch", "Redshift", "Cassandra", "CouchDB"
                ]} 
              />
              
              <SkillCategory 
                title="Blockchain" 
                icon={<Bitcoin className="h-5 w-5 text-primary" />} 
                skills={[
                  "Metamask", "Remix", "Ethers.js", "web3.js", "Geth", "Ganache", "Parity", "Infura", 
                  "Ethereum", "Hyperledger Fabric", "Truffle", "Embark", "OpenZeppelin Contracts", "Solidity", 
                  "Corda", "Quorum", "Ripple", "IOTA", "Stellar", "Cardano", "Uport", "Oculus Quest", 
                  "Polkadot", "Tezos", "Avalanche", "Cosmos SDK", "Chainlink", "Solana", "Algorand", "Arbitrum"
                ]} 
              />
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">
                    My complete tech stack includes 150+ tools and technologies. Click on each category above to see the full list of technologies I've worked with.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ExperienceSection;
