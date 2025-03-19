
import { QuickOption } from "./types";

export const predefinedResponses = [
  {
    keywords: ["hello", "hi", "hey", "hola"],
    response: "Hi! I'm Renzo Avila's virtual assistant. How can I help you today? Feel free to ask about his experience, skills, or how to get in touch."
  },
  {
    keywords: ["experience", "work", "job", "experiencia", "trabajo"],
    response: "Renzo has over 6 years of experience as a DevSecOps Engineer, integrating security into CI/CD pipelines and managing cloud infrastructures compliant with ISO 27001. He has led more than 20 blockchain projects across Latin America, the Caribbean, and Europe."
  },
  {
    keywords: ["skills", "habilidades", "tecnologías", "technologies"],
    response: "Renzo's key skills include:\n• AWS\n• Security (ISO 27001, OWASP)\n• Blockchain\n• CI/CD\n• Terraform & Kubernetes\n• Docker\n• Python, Rust, JavaScript, TypeScript"
  },
  {
    keywords: ["contact", "contacto", "email", "phone", "teléfono"],
    response: "You can reach Renzo via:\n• Email: RENZO@AVILA.WS\n• Phone: +44 330 122 9696\n• Or schedule a meeting using the contact form on this site."
  },
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum"],
    response: "Renzo has led 20+ blockchain projects, enhancing security and efficiency for financial and enterprise applications across Latin America, the Caribbean, and Europe. He has experience with various blockchain platforms."
  },
  {
    keywords: ["security", "seguridad", "iso", "devsecops"],
    response: "Renzo has coordinated ISO 27001 certifications, reducing security incidents by 50%. He has developed automated security testing, improving software protection by 45%."
  },
  {
    keywords: ["location", "ubicación", "where", "dónde"],
    response: "Renzo is based in Barcelona, Spain."
  }
];

export const quickOptions: QuickOption[] = [
  { id: "experience", text: "Work Experience", keywords: ["experience", "trabajo"] },
  { id: "skills", text: "Technical Skills", keywords: ["skills", "habilidades"] },
  { id: "contact", text: "Contact Information", keywords: ["contact", "contacto"] },
  { id: "blockchain", text: "Blockchain Projects", keywords: ["blockchain", "crypto"] },
  { id: "security", text: "Security Experience", keywords: ["security", "seguridad"] },
  { id: "location", text: "Location", keywords: ["location", "ubicación"] }
];

export const welcomeMessage = "Hi! I'm Renzo Avila's virtual assistant. How can I help you today? Feel free to ask about his experience, skills, or how to get in touch.";

export const fallbackMessage = "I'm sorry, I can't answer that right now. Could you try asking about Renzo's experience, skills, or contact information?";
