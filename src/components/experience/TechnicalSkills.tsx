import { Server, Lock, Code, Database, Bitcoin } from "lucide-react";
import SkillCategory from "./SkillCategory";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const TechnicalSkills = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8">{t('skills.technical_skills')}</h3>
      
      <div className="space-y-6">
        <SkillCategory 
          title={t('skills.categories.aws_cloud')}
          icon={<Server className="h-5 w-5 text-primary" />} 
          skills={[
            // Top 8 most relevant for DevSecOps (shown first)
            "Security Hub", "GuardDuty", "IAM Identity Center", "Kubernetes", "Terraform", "Jenkins", "CloudWatch", "Docker",
            // Security & Compliance
            "WAF", "Shield", "Macie", "Inspector", "Security Lake", "Detective", "CloudHSM", "Secrets Manager", "Audit Manager", "KMS",
            // CI/CD & Infrastructure
            "EKS", "CodeBuild", "CodePipeline", "Argo CD", "Docker registry", "Prometheus", "Grafana", "JumpCloud",
            // Compute & Serverless
            "EC2", "Lambda", "Fargate", "EBS", "App Runner", "Batch",
            // Storage & Database
            "S3", "Glacier", "RDS", "DynamoDB", "MSK", "QLDB",
            // Networking & API
            "VPC", "ELB", "VPN", "Route 53", "API Gateway", "CloudSearch",
            // Messaging & Integration
            "SNS", "SQS", "Pinpoint",
            // Monitoring & Management
            "CloudTrail", "CloudFormation", "Control Tower", "CloudShell", "X-Ray", "SSH",
            // Additional Services
            "Blockchain", "SageMaker", "Cognito"
          ]} 
        />
        
        <SkillCategory 
          title={t('skills.categories.security')} 
          icon={<Lock className="h-5 w-5 text-primary" />} 
          skills={[
            // Top 8 Security Tools (shown first)
            "OWASP", "Veracode", "Prisma Cloud", "Snyk", "Qualys", "Okta", "Burp Suite", "ISO 27001",
            // SAST & DAST Tools
            "Checkmarx", "Fortify", "Acunetix", "SonarCloud",
            // Container & Supply Chain Security
            "Anchore", "Synopsys Black Duck", "Sonatype",
            // WAF & Runtime Protection
            "Imperva", "Trendmicro", "Fluid Attacks", "Vanta"
          ]} 
        />
        
        <SkillCategory 
          title={t('skills.categories.development')} 
          icon={<Code className="h-5 w-5 text-primary" />} 
          skills={[
            // Top 8 Core Tools (shown first)
            "Python", "Go", "TypeScript", "Node.js", "Git", "Visual Studio Code", "Django", "FastAPI",
            // Programming Languages
            "JavaScript", "Java", "Rust", "C#", "PHP", "Ruby", "SQL", "Visual Basic", "Swift", "Kotlin", "HTML/CSS", "Bash", "Dart",
            // Version Control & Cloud
            "GitLab", "GitHub", "BitBucket", "Heroku", "CloudFlare",
            // Development Tools
            "JSON", "VIM", "Nano", "Webpack", "NPM", "Firebase Crashlytics", "Google Workspace",
            // Testing & API
            "Postman", "Pytest", "Jest", "Mocha", "Jasmine", "Selenium",
            // Backend Frameworks
            "Express.js", "Flask", "Laravel", "Symfony", "Rails", "NestJS",
            // Frontend & Mobile
            "React", "React.js", "React Native", "Next", "Vue.js", "Nuxt.js", "Angular", "Ionic", "Electron", "Flutter", "NativeScript", "jQuery",
            // Project Management & Design
            "Jira", "Trello", "Slack", "Shortcut", "BambooHR", "ClickUp", "Zeplin", "Miro", "Figma",
            // Additional Tools
            "Kafka", "Hugo"
          ]} 
        />
        
        <SkillCategory 
          title={t('skills.categories.databases')} 
          icon={<Database className="h-5 w-5 text-primary" />} 
          skills={[
            // Top 8 Database Technologies (shown first)
            "PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "GraphQL", "BigQuery", "DBeaver",
            // SQL Databases
            "SQL Server", "MariaDB", "TiDB", "SnowFlake", "Redshift",
            // NoSQL & Cache
            "Cassandra", "CouchDB",
            // Data Tools & Analytics
            "Metabase", "Tableau", "Airflow", "Liquibase"
          ]} 
        />
        
        <SkillCategory 
          title={t('skills.categories.blockchain')} 
          icon={<Bitcoin className="h-5 w-5 text-primary" />} 
          skills={[
            // Top 8 Core Blockchain Tools (shown first)
            "Ethereum", "Solidity", "web3.js", "Metamask", "Truffle", "OpenZeppelin Contracts", "Chainlink", "Solana",
            // Development Tools
            "Ethers.js", "Remix", "Ganache", "Geth", "Parity", "Infura", "Embark",
            // Enterprise Blockchain
            "Hyperledger Fabric", "Corda", "Quorum",
            // Layer 1 Blockchains
            "Polkadot", "Cardano", "Avalanche", "Algorand", "Tezos", "Stellar", "Ripple", "IOTA",
            // Layer 2 & Infrastructure
            "Arbitrum", "Cosmos SDK", "Uport", "Oculus Quest"
          ]} 
        />
        
        <Card className="p-6">
          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground">
              {t('skills.tech_stack_note')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSkills;
