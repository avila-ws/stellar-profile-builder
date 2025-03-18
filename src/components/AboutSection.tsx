import { CheckCircle, Globe, GraduationCap, Shield, Building, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";
interface EducationCardProps {
  institution: string;
  url: string;
  degrees: Array<{
    title: string;
    description: string;
  }>;
}
const EducationCard = ({
  institution,
  url,
  degrees
}: EducationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="cursor-pointer hover:bg-accent/50 rounded-md p-2 -m-2 transition-colors" onClick={() => setIsOpen(!isOpen)}>
      <h4 className="font-medium flex items-center justify-between">
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" onClick={e => e.stopPropagation()}>
          {institution}
        </a>
        <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">Toggle</span>
        </Button>
      </h4>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground">
            {degrees.map((degree, index) => <li key={index}>
                <span className="font-medium">{degree.title}</span> - {degree.description}
              </li>)}
          </ul>
        </CollapsibleContent>
      </Collapsible>
      
      {!isOpen && <div className="mt-1 text-muted-foreground text-sm">
          Click to see details about {degrees.length} degree{degrees.length > 1 ? 's' : ''}
        </div>}
    </div>;
};
const AboutSection = () => {
  const [languagesOpen, setLanguagesOpen] = useState(false);
  return <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
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
                  <EducationCard institution="Central University of Technology" url="https://web.archive.org/web/20110806134524/http://www.unitec.edu.ve/index5.jsp" degrees={[{
                  title: "B.Sc. in Systems Engineering",
                  description: "Specialized in IT-driven business optimization and strategic data management"
                }, {
                  title: "B.Sc. in Business Administration and Management",
                  description: "Competent in operational efficiency and strategic administrative leadership"
                }]} />
                  
                  <EducationCard institution="Forensic Science and Cybersecurity Academy" url="https://ujap.edu.ve/" degrees={[{
                  title: "Diploma in Forensic Science and Criminalistics",
                  description: "Specialized in forensic techniques and criminal analysis"
                }, {
                  title: "Diploma in Forensic Computing and Cybercrime",
                  description: "Trained in cybercrime investigation and forensic computing"
                }]} />
                </div>
              </Card>
              
              <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow duration-300" onClick={() => setLanguagesOpen(!languagesOpen)}>
                <Collapsible open={languagesOpen} onOpenChange={setLanguagesOpen}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                      Languages
                    </h3>
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8 pointer-events-none">
                      {languagesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                  
                  <CollapsibleContent>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>English (Fluent)</li>
                      <li>Portuguese (Fluent)</li>
                      <li>Spanish (Native)</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
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
    </section>;
};
export default AboutSection;