
import { QuickOption } from './types';

export const predefinedResponses = [
  {
    keywords: ["hello", "hi", "hey", "hola"],
    response: "¡Hola! Soy el asistente virtual de Renzo Avila. ¿En qué puedo ayudarte? Puedes seleccionar una opción o escribir tu pregunta."
  },
  {
    keywords: ["experience", "work", "job", "experiencia", "trabajo"],
    response: "Renzo tiene más de 6 años de experiencia como DevSecOps Engineer, integrando seguridad en pipelines CI/CD y gestionando infraestructuras cloud cumpliendo con ISO 27001. Ha liderado más de 20 proyectos blockchain en América Latina, el Caribe y Europa."
  },
  {
    keywords: ["skills", "habilidades", "tecnologías", "technologies"],
    response: "Las principales habilidades de Renzo incluyen AWS, Seguridad (ISO 27001, OWASP), Blockchain, CI/CD, Terraform, Kubernetes, Docker, y lenguajes como Python, Rust, JavaScript y TypeScript."
  },
  {
    keywords: ["contact", "contacto", "email", "phone", "teléfono"],
    response: "Puedes contactar a Renzo por email en RENZO@AVILA.WS, por teléfono al +44 330 122 9696, o agendar una reunión usando el formulario de contacto en esta web."
  },
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum"],
    response: "Renzo ha liderado más de 20 proyectos blockchain, mejorando la seguridad y eficiencia para aplicaciones financieras y empresariales en América Latina, el Caribe y Europa. Tiene experiencia en diversas plataformas blockchain."
  },
  {
    keywords: ["security", "seguridad", "iso", "devsecops"],
    response: "Renzo ha coordinado certificaciones ISO 27001, reduciendo incidentes de seguridad en un 50% y ha desarrollado pruebas de seguridad automatizadas, mejorando la protección del software en un 45%."
  },
  {
    keywords: ["location", "ubicación", "where", "dónde"],
    response: "Renzo está ubicado en Barcelona, España."
  }
];

export const quickOptions: QuickOption[] = [
  { id: "experience", text: "Experiencia laboral", keywords: ["experience", "trabajo"] },
  { id: "skills", text: "Habilidades técnicas", keywords: ["skills", "habilidades"] },
  { id: "contact", text: "Información de contacto", keywords: ["contact", "contacto"] },
  { id: "blockchain", text: "Proyectos blockchain", keywords: ["blockchain", "crypto"] },
  { id: "security", text: "Experiencia en seguridad", keywords: ["security", "seguridad"] },
  { id: "location", text: "Ubicación", keywords: ["location", "ubicación"] }
];
