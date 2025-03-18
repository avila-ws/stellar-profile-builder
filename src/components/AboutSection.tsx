
import { CheckCircle, Globe, GraduationCap, Shield, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              With over 6 years of experience as a DevSecOps Engineer, I've dedicated my career to bridging the gap between development, operations, and security. I specialize in creating robust security frameworks that don't slow down innovation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My work spans across various industries, particularly in fintech and blockchain, where I've implemented security measures that protect sensitive data while enabling rapid deployment cycles.
            </p>
            
            <div className="space-y-8 mt-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  Education
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium">Central University of Technology</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                      <li>B.Sc. in Systems Engineering - Specialized in IT-driven business optimization</li>
                      <li>B.Sc. in Business Administration and Management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Forensic Science and Cybersecurity Academy</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
                      <li>Diploma in Forensic Science and Criminalistics</li>
                      <li>Diploma in Forensic Computing and Cybercrime</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  Languages
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>English (Fluent)</li>
                  <li>Portuguese (Fluent)</li>
                  <li>Spanish (Native)</li>
                </ul>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border shadow-sm">
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
            </Card>
            
            <Card className="p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                Companies I've Worked With
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a href="https://r2.co/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">R2</span>
                  <span className="text-xs text-muted-foreground">NeoBank Mexico</span>
                </a>
                
                <a href="https://www.b89.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">B89</span>
                  <span className="text-xs text-muted-foreground">NeoBank Peru</span>
                </a>
                
                <a href="https://www.viabcp.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">BCP</span>
                  <span className="text-xs text-muted-foreground">Bank Peru</span>
                </a>
                
                <a href="https://www.kw.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">Keller Williams</span>
                  <span className="text-xs text-muted-foreground">Realty US</span>
                </a>
                
                <a href="https://pe.nttdata.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">NTT DATA</span>
                  <span className="text-xs text-muted-foreground">Consulting Peru</span>
                </a>
                
                <a href="https://web.archive.org/web/20170914185910/http://paraisocreativo.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors">
                  <span className="font-medium">Paraiso Creativo</span>
                  <span className="text-xs text-muted-foreground">Consulting VE</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
