import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de Seguridad en la Nube',
    description: 'Plataforma de seguridad integral para entornos AWS que combina detección de amenazas, análisis de vulnerabilidades y gestión automatizada de políticas de seguridad. Redujo en un 45% el tiempo de respuesta ante incidentes y mejoró la postura de seguridad general en un 60%.',
    technologies: ['AWS', 'Python', 'Terraform', 'Docker', 'React'],
    imageUrl: '/images/projects/cloud-security.jpg',
    githubUrl: 'https://github.com/username/cloud-security-system'
  },
  {
    title: 'Plataforma de Gestión DevSecOps',
    description: 'Herramienta centralizada que integra seguridad en el ciclo de vida de desarrollo, automatizando el escaneo de código, la evaluación de dependencias y la gestión de vulnerabilidades. Aumentó la eficiencia del equipo en un 40% y redujo el tiempo de remediación en un 50%.',
    technologies: ['Kubernetes', 'Go', 'PostgreSQL', 'GitLab CI', 'Grafana'],
    imageUrl: '/images/projects/devsecops-platform.jpg',
    demoUrl: 'https://devsecops-demo.example.com',
    githubUrl: 'https://github.com/username/devsecops-platform'
  },
  {
    title: 'Blockchain para Auditoría de Seguridad',
    description: 'Solución basada en blockchain para registrar y verificar auditorías de seguridad, garantizando inmutabilidad y trazabilidad completa. Mejoró la confianza en los procesos de auditoría en un 75% y simplificó el cumplimiento regulatorio.',
    technologies: ['Ethereum', 'Solidity', 'Node.js', 'React', 'Web3.js'],
    imageUrl: '/images/projects/blockchain-audit.jpg',
    githubUrl: 'https://github.com/username/blockchain-audit'
  },
  {
    title: 'Framework de Pruebas de Penetración Automatizadas',
    description: 'Sistema que automatiza y estandariza pruebas de penetración para aplicaciones web y APIs, generando informes detallados y recomendaciones de remediación. Redujo el tiempo de pruebas en un 65% manteniendo una alta tasa de detección.',
    technologies: ['Python', 'Docker', 'OWASP ZAP', 'Flask', 'MongoDB'],
    imageUrl: '/images/projects/pentest-framework.jpg',
    demoUrl: 'https://pentest-demo.example.com',
    githubUrl: 'https://github.com/username/automated-pentest'
  }
]; 