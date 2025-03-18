
import { Shield, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            DevSecOps Engineer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Renzo Avila
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
            Integrating security into CI/CD pipelines, managing ISO 27001-compliant cloud infrastructures, and delivering secure solutions for blockchain and fintech projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#experience">View Experience</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Integration</h3>
              <p className="text-muted-foreground text-center">Embedding security best practices throughout the development lifecycle</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-muted-foreground text-center">Managing ISO 27001-compliant cloud solutions</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pipeline Expertise</h3>
              <p className="text-muted-foreground text-center">Building and optimizing secure CI/CD workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
