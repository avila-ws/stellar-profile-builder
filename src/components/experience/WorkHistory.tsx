
import { Building2, Building, Home, Palmtree, Landmark, Server } from "lucide-react";
import WorkExperience from "./WorkExperience";
import { useIsMobile } from "@/hooks/use-mobile";

const WorkHistory = () => {
  const isMobile = useIsMobile();
  
  return (
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
          defaultExpanded={!isMobile}
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
          defaultExpanded={!isMobile}
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
  );
};

export default WorkHistory;
