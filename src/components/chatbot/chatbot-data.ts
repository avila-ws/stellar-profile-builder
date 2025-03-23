import { PredefinedResponse, QuickOption } from "./chatbot-types";

export const predefinedResponses: PredefinedResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "hola"],
    response: `<div class="space-y-2">
      <p>👋 Hi there! I'm Renzo Avila's virtual assistant.</p>
      <p>I can help you learn more about:</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>💼 His professional experience</li>
        <li>🛠️ Technical skills</li>
        <li>📱 Contact information</li>
      </ul>
      <p>What would you like to know?</p>
    </div>`
  },
  {
    keywords: ["experience", "work", "job", "experiencia", "trabajo"],
    response: `<div class="space-y-3">
      <p>🚀 <strong>DevSecOps Leadership</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>6+ years as DevSecOps Engineer</li>
        <li>Expert in CI/CD security integration</li>
        <li>ISO 27001 compliant cloud infrastructure management</li>
      </ul>
      <p>🌎 <strong>Global Impact</strong></p>
      <ul class="list-disc pl-4">
        <li>Led 20+ blockchain projects across:</li>
        <li class="ml-4">• Latin America</li>
        <li class="ml-4">• Caribbean</li>
        <li class="ml-4">• Europe</li>
      </ul>
    </div>`
  },
  {
    keywords: ["skills", "habilidades", "tecnologías", "technologies"],
    response: `<div class="space-y-3">
      <p>🛠️ <strong>Core Technical Skills:</strong></p>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <p class="font-medium">☁️ Cloud & Infrastructure</p>
          <ul class="list-disc pl-4">
            <li>AWS</li>
            <li>Terraform</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <p class="font-medium">🔒 Security</p>
          <ul class="list-disc pl-4">
            <li>ISO 27001</li>
            <li>OWASP</li>
            <li>DevSecOps</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="font-medium">💻 Programming Languages</p>
        <p class="pl-4">Python • Rust • JavaScript • TypeScript</p>
      </div>
    </div>`
  },
  {
    keywords: ["contact", "contacto", "email", "phone", "teléfono"],
    response: `<div class="space-y-3">
      <p>📫 <strong>Get in touch with Renzo:</strong></p>
      <ul class="space-y-2">
        <li>✉️ <strong>Email:</strong> renzo@avila.ws</li>
        <li>📱 <strong>Phone:</strong> +44 330 122 9696</li>
        <li>🤝 <strong>Meeting:</strong> Use the contact form on this website</li>
      </ul>
    </div>`
  },
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum"],
    response: `<div class="space-y-3">
      <p>⛓️ <strong>Blockchain Expertise</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>Led 20+ blockchain projects</li>
        <li>Enhanced security & efficiency for:</li>
        <ul class="pl-4">
          <li>• Financial applications</li>
          <li>• Enterprise solutions</li>
        </ul>
      </ul>
      <p>🌐 <strong>Global Reach:</strong> Latin America, Caribbean, and Europe</p>
    </div>`
  },
  {
    keywords: ["security", "seguridad", "iso", "devsecops"],
    response: `<div class="space-y-3">
      <p>🔒 <strong>Security Achievements:</strong></p>
      <ul class="list-disc pl-4 space-y-2">
        <li>ISO 27001 certification coordination</li>
        <li>50% reduction in security incidents</li>
        <li>45% improvement in software protection through automated security testing</li>
      </ul>
    </div>`
  },
  {
    keywords: ["location", "ubicación", "where", "dónde"],
    response: `<div class="space-y-2">
      <p>📍 <strong>Location:</strong></p>
      <p>Based in the beautiful city of Barcelona, Spain 🇪🇸</p>
    </div>`
  }
];

export const quickOptions: QuickOption[] = [
  { id: "experience", text: "Work Experience", emoji: "💼", keywords: ["experience", "work"] },
  { id: "skills", text: "Technical Skills", emoji: "🛠️", keywords: ["skills", "technologies"] },
  { id: "contact", text: "Contact Information", emoji: "📱", keywords: ["contact", "email"] },
  { id: "blockchain", text: "Blockchain Projects", emoji: "⛓️", keywords: ["blockchain", "crypto"] },
  { id: "security", text: "Security Experience", emoji: "🔒", keywords: ["security", "devsecops"] },
  { id: "location", text: "Location", emoji: "📍", keywords: ["location", "where"] }
];

export const welcomeMessage = `<div class="space-y-2">
  <p>👋 Hi there! I'm Renzo Avila's virtual assistant.</p>
  <p>I can help you learn more about Renzo's profile. Feel free to:</p>
  <ul class="list-disc pl-4 space-y-1">
    <li>Select one of the quick options below</li>
    <li>Or type your question in the chat</li>
  </ul>
</div>`;

export const fallbackResponse = `<div class="space-y-2">
  <p>🤔 I'm not sure how to help with that specific query.</p>
  <p>You can ask me about:</p>
  <ul class="list-disc pl-4 space-y-1">
    <li>💼 Professional experience</li>
    <li>🛠️ Technical skills</li>
    <li>📱 Contact information</li>
    <li>⛓️ Blockchain projects</li>
    <li>🔒 Security expertise</li>
    <li>📍 Location</li>
  </ul>
  <p class="mt-3 text-sm">Feel free to select a topic or ask any other question!</p>
</div>`; 