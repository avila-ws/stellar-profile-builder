import { Profile, ContactInfo } from '@/types';

// Información de contacto
export const CONTACT_INFO: ContactInfo = {
  email: 'renzogarciadev@gmail.com',
  phone: '+51 999 888 777',
  linkedin: 'https://linkedin.com/in/renzogarciadev',
  github: 'https://github.com/renzogarcia',
  portfolio: 'https://renzogarcia.dev'
};

// Perfil completo
export const PROFILE: Profile = {
  name: 'Renzo García',
  title: 'DevSecOps Engineer & Cloud Security Specialist',
  summary: 'Experto en seguridad en la nube con más de 5 años de experiencia combinando seguridad, desarrollo y operaciones. Especializado en implementar estrategias de DevSecOps, automatización de seguridad y gestión de infraestructura en la nube para entornos financieros. Certificado en AWS y seguridad, con historial probado de reducción de vulnerabilidades y optimización de procesos de seguridad.',
  photo: '/images/profile-photo.jpg',
  location: 'Lima, Perú',
  contactInfo: CONTACT_INFO
}; 