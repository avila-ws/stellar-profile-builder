// Tipos comunes para toda la aplicación

// Tipo para elementos de navegación
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

// Tipo para datos del perfil
export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  website?: string;
  bio: string;
  skills: string[];
  languages: Language[];
}

// Tipo para idiomas
export interface Language {
  name: string;
  level: string;
}

// Tipo para experiencia laboral
export interface WorkExperience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

// Tipo para educación
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

// Tipo para proyectos personales
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Tipo para tema
export type Theme = 'light' | 'dark' | 'system';

// Tipo para mensajes del chat
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isHtml?: boolean;
}

// Tipo para habilidades técnicas
export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

// Categorías de habilidades
export enum SkillCategory {
  PROGRAMMING = 'Programming Languages',
  FRAMEWORKS = 'Frameworks & Libraries',
  DEVOPS = 'DevOps & Cloud',
  SECURITY = 'Security',
  DATABASES = 'Databases',
  OTHER = 'Other'
}

// Tipo para información de contacto
export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

// Tipo para perfil personal
export interface Profile {
  name: string;
  title: string;
  summary: string;
  photo?: string;
  location: string;
  contactInfo: ContactInfo;
} 