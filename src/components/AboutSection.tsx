
import { CheckCircle, Globe, GraduationCap, Shield } from "lucide-react";

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
            
            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">Trilingual: English, Portuguese, and Spanish</span>
              </div>
              
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">B.Sc. in Systems Engineering & Business Administration</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">Diploma in Forensic Computing and Cybercrime</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card shadow-sm rounded-lg border p-8">
            <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
            
            <ul className="space-y-4">
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Led ISO 27001 certification</span>
                  <p className="text-muted-foreground">Reduced security incidents by 50% and enhanced AWS security with robust endpoint protection</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Enhanced code analysis</span>
                  <p className="text-muted-foreground">Improved software protection by 45% and reduced production vulnerabilities by 25%</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">Blockchain leadership</span>
                  <p className="text-muted-foreground">Directed key blockchain projects with 60% increase in transaction throughput and 40% decrease in costs</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium">CI/CD pipeline automation</span>
                  <p className="text-muted-foreground">Embedded compliance enforcement, vulnerability scanning, and security gates into development lifecycle</p>
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
