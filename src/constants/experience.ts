import { WorkExperience, Education, Language } from '@/types';

// Experiencia laboral
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'R2 – NeoBank',
    title: 'DevSecOps Engineer',
    location: 'Mexico',
    startDate: 'Oct 2022',
    endDate: 'Present',
    description: [
      'Led and coordinated the ISO 27001 certification, reducing security incidents by 50% and enhancing AWS security with robust endpoint protection and incident management policies',
      'Developed automated security testing and integrated advanced code analysis, improving software protection by 45% and reducing production vulnerabilities by 25%',
      'Conducted security audits and proactive risk assessments, increasing threat detection capabilities by 30% and ensuring faster incident response, reducing potential attack impact by 20%',
      'Designed and enforced robust cloud security policies, ensuring compliance with industry standards and fortifying AWS IAM governance to mitigate unauthorized access risks'
    ],
    technologies: ['AWS', 'ISO 27001', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform']
  },
  {
    company: 'B89 – NeoBank',
    title: 'DevSecOps Engineer',
    location: 'Peru',
    startDate: 'Oct 2020',
    endDate: 'Sep 2022',
    description: [
      'Established and fortified B89\'s security infrastructure, reducing vulnerabilities by 50% and integrating comprehensive security measures in fintech applications, enhancing overall system resilience',
      'Directed key blockchain projects, managing infrastructure across multiple blockchain protocols, resulting in a 60% increase in transaction throughput and a 40% decrease in operational costs',
      'Led cross-functional teams to integrate advanced security into financial solutions, enhancing operational efficiency by 35% and improving quality metrics by 30%',
      'Automated security processes within CI/CD pipelines, embedding compliance enforcement, vulnerability scanning, and security gates into the development lifecycle'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Blockchain', 'CI/CD', 'Security']
  },
  {
    company: 'BCP – Bank',
    title: 'DevSecOps Engineer',
    location: 'Peru',
    startDate: 'Oct 2019',
    endDate: 'Sep 2020',
    description: [
      'Streamlined deployment processes through CI/CD implementation, reducing release time by 40% while maintaining rigorous security standards',
      'Implemented comprehensive security frameworks across cloud platforms, enhancing data protection and regulatory compliance',
      'Directed vulnerability management programs that reduced security incidents by 35% through proactive identification and remediation',
      'Collaborated with development and operations teams to embed security best practices throughout the SDLC'
    ],
    technologies: ['AWS', 'CI/CD', 'Security', 'DevOps', 'Monitoring']
  }
];

// Educación
export const EDUCATION: Education[] = [
  {
    institution: 'Central University of Technology',
    degree: 'B.Sc.',
    field: 'Systems Engineering',
    startDate: '2010',
    endDate: '2014',
    description: 'Specialized in IT-driven business optimization and strategic data management'
  },
  {
    institution: 'Central University of Technology',
    degree: 'B.Sc.',
    field: 'Business Administration and Management',
    startDate: '2008',
    endDate: '2012',
    description: 'Competent in operational efficiency and strategic administrative leadership'
  },
  {
    institution: 'Forensic Science and Cybersecurity Academy',
    degree: 'Professional Certification',
    field: 'Cybersecurity',
    startDate: '2017',
    endDate: '2018',
    description: 'Specialized training in digital forensics, security analysis, and penetration testing'
  }
];

// Idiomas
export const LANGUAGES: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Portuguese', level: 'Fluent' },
  { name: 'Spanish', level: 'Native' }
]; 