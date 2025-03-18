
import { CheckCircle, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              With over 6 years of experience as a DevSecOps Engineer, I've dedicated my career to bridging the gap between development, operations, and security. I specialize in creating robust security frameworks that don't slow down innovation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My work spans across various industries, particularly in fintech and blockchain, where I've implemented security measures that protect sensitive data while enabling rapid deployment cycles.
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg font-medium">Trilingual: English, Portuguese, and Spanish</span>
            </div>
          </div>
          
          <div className="bg-card shadow-sm rounded-lg border p-8">
            <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
            
            <ul className="space-y-4">
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Reduced security incidents by 50%</span>
                  <p className="text-muted-foreground">Through implementation of automated security scanning and remediation processes</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Enhanced code analysis</span>
                  <p className="text-muted-foreground">Integrated SAST and DAST tools into CI/CD pipelines, identifying vulnerabilities earlier in the development cycle</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Cloud security expertise</span>
                  <p className="text-muted-foreground">Implemented and maintained ISO 27001-compliant infrastructure across multiple cloud platforms</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Security culture development</span>
                  <p className="text-muted-foreground">Led training initiatives that embedded security best practices across development teams</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
