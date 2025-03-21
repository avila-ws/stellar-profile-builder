import { Shield, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateAvatar, setAnimateAvatar] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  
  useEffect(() => {
    // Add a small delay before starting animations for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Add a pulse animation to the avatar after the initial animation
    const pulseTimer = setTimeout(() => {
      setAnimateAvatar(true);
    }, 1500);
    
    // Start the subtle highlight animation for contact links
    const highlightTimer = setTimeout(() => {
      // Start the highlighting sequence
      const interval = setInterval(() => {
        setHighlightIndex(prev => {
          // Create a quick iridescent effect that cycles through links rapidly
          if (prev === 3) {
            // Very quick transition to no highlight and then to the first item
            setTimeout(() => {
              setHighlightIndex(0);
            }, 150); // Ultra short delay before moving to the first item (reduced from 300ms)
            return -1; // Brief moment with no highlight
          }
          return prev >= 3 ? -1 : prev + 1;
        });
      }, 800); // Much faster highlight change (reduced from 1500ms to 800ms)
      
      return () => clearInterval(interval);
    }, 2000); // Start a bit earlier (reduced from 3000ms to 2000ms)
    
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
      clearTimeout(highlightTimer);
    };
  }, []);
  
  return <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className={`inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            DevSecOps Engineer
          </div>
          
          <div className={`mb-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  type="button"
                  className="cursor-pointer transition-all duration-300 hover:scale-105 bg-transparent border-0 p-0"
                  aria-label="Ver foto de perfil"
                >
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 profile-gradient-border"></div>
                    <Avatar className={`w-40 h-40 transition-all duration-300 rounded-full overflow-hidden relative z-10 ${animateAvatar ? "opacity-100" : "opacity-90"}`}>
                      <AvatarImage src="/lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png" alt="Renzo Avila" />
                      <AvatarFallback className="text-2xl font-bold">RA</AvatarFallback>
                    </Avatar>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-md w-auto flex items-center justify-center">
                <DialogTitle className="sr-only">Renzo Avila Profile Photo</DialogTitle>
                <div className="relative w-full">
                  <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                    <img src="/lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png" alt="Renzo Avila" className="w-full h-full object-cover" />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            Renzo Avila
          </h1>
          
          <p className={`text-xl md:text-2xl text-foreground/80 max-w-3xl mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            DevSecOps Engineer with 6 years of experience integrating security into CI/CD pipelines and managing ISO 27001-compliant cloud infrastructures.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <a 
              href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
                ${highlightIndex === 0 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Barcelona, Spain</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
                ${highlightIndex === 1 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">LinkedIn</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
                ${highlightIndex === 2 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">+44 330 122 9696</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://calendar.app.google/oy7TjX11PNBx6PoJ9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
                ${highlightIndex === 3 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">renzo@avila.ws</span>
            </a>
          </div>
          
          <p className={`text-lg text-muted-foreground max-w-3xl mb-10 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            Trilingual in English, Portuguese, and Spanish • Specialized in Blockchain, AWS Security & ISO 27001
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-750 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <Button asChild size="lg" className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform border-2 hover:border-primary/50">
              <a href="#experience">View Experience</a>
            </Button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
              <Shield className="h-12 w-12 text-primary mb-4 scale-in" />
              <h3 className="text-lg font-semibold mb-2">Security Integration</h3>
              <p className="text-muted-foreground text-center">Reduced security incidents by 50% through ISO 27001 implementation</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
              <Cloud className="h-12 w-12 text-primary mb-4 scale-in" />
              <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-muted-foreground text-center">AWS expert with experience across 30+ services and tools</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
              <Code className="h-12 w-12 text-primary mb-4 scale-in" />
              <h3 className="text-lg font-semibold mb-2">Blockchain Expertise</h3>
              <p className="text-muted-foreground text-center">Led 20+ blockchain projects across Latin America, Caribbean, and Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
