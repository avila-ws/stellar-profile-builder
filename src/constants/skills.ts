import { Skill, SkillCategory } from '@/types';

export const SKILLS: Skill[] = [
  // Lenguajes de programación
  { name: 'Python', level: 90, category: SkillCategory.PROGRAMMING },
  { name: 'JavaScript', level: 85, category: SkillCategory.PROGRAMMING },
  { name: 'TypeScript', level: 80, category: SkillCategory.PROGRAMMING },
  { name: 'Go', level: 75, category: SkillCategory.PROGRAMMING },
  { name: 'Bash/Shell', level: 85, category: SkillCategory.PROGRAMMING },
  
  // Frameworks y bibliotecas
  { name: 'React', level: 75, category: SkillCategory.FRAMEWORKS },
  { name: 'Node.js', level: 80, category: SkillCategory.FRAMEWORKS },
  { name: 'Next.js', level: 70, category: SkillCategory.FRAMEWORKS },
  { name: 'Django', level: 85, category: SkillCategory.FRAMEWORKS },
  { name: 'Flask', level: 80, category: SkillCategory.FRAMEWORKS },
  
  // DevOps y Cloud
  { name: 'AWS', level: 95, category: SkillCategory.DEVOPS },
  { name: 'Docker', level: 90, category: SkillCategory.DEVOPS },
  { name: 'Kubernetes', level: 85, category: SkillCategory.DEVOPS },
  { name: 'Terraform', level: 80, category: SkillCategory.DEVOPS },
  { name: 'CI/CD', level: 90, category: SkillCategory.DEVOPS },
  { name: 'GitLab', level: 85, category: SkillCategory.DEVOPS },
  { name: 'GitHub Actions', level: 80, category: SkillCategory.DEVOPS },
  
  // Seguridad
  { name: 'Pentesting', level: 85, category: SkillCategory.SECURITY },
  { name: 'OWASP', level: 90, category: SkillCategory.SECURITY },
  { name: 'Security Auditing', level: 85, category: SkillCategory.SECURITY },
  { name: 'Vulnerability Assessment', level: 90, category: SkillCategory.SECURITY },
  { name: 'ISO 27001', level: 85, category: SkillCategory.SECURITY },
  
  // Bases de datos
  { name: 'PostgreSQL', level: 85, category: SkillCategory.DATABASES },
  { name: 'MySQL', level: 80, category: SkillCategory.DATABASES },
  { name: 'MongoDB', level: 75, category: SkillCategory.DATABASES },
  { name: 'Redis', level: 70, category: SkillCategory.DATABASES },
  
  // Otras habilidades
  { name: 'Git', level: 90, category: SkillCategory.OTHER },
  { name: 'Agile/Scrum', level: 85, category: SkillCategory.OTHER },
  { name: 'Blockchain', level: 70, category: SkillCategory.OTHER },
  { name: 'RESTful APIs', level: 90, category: SkillCategory.OTHER },
  { name: 'GraphQL', level: 75, category: SkillCategory.OTHER }
]; 