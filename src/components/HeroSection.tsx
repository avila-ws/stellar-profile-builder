import { Shield, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Add a small delay before starting animations for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
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
                <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
                  <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-lg">
                    <AvatarImage src="/lovable-uploads/78d2e6ac-44c0-4542-ab78-92637203a5fd.png" alt="Renzo Avila" />
                    <AvatarFallback className="text-2xl font-bold">RA</AvatarFallback>
                  </Avatar>
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-3xl w-full flex items-center justify-center">
                <div className="relative w-full max-w-xl mx-auto">
                  {/* Black vignette overlay effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_40px_rgba(0,0,0,0)] z-10 rounded-full"></div>
                  
                  {/* Image container with negative top margin to crop the top portion */}
                  <div className="overflow-hidden rounded-full">
                    <img src="/lovable-uploads/78d2e6ac-44c0-4542-ab78-92637203a5fd.png" alt="Renzo Avila" className="w-full h-auto object-cover transform transition-transform duration-300 scale-110 border-4 border-primary/20 -mt-10" />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            Renzo Avila
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            DevSecOps Engineer with 6 years of experience integrating security into CI/CD pipelines and managing ISO 27001-compliant cloud infrastructures.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <span className="font-medium">Barcelona, Spain</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <span className="font-medium">LinkedIn</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <span className="font-medium">+44 330 122 9696</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://calendar.app.google/oy7TjX11PNBx6PoJ9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <span className="font-medium">RENZO@AVILA.WS</span>
            </a>
          </div>
          
          <p className={`text-lg text-muted-foreground max-w-3xl mb-10 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            Trilingual in English, Portuguese, and Spanish • Specialized in Blockchain, AWS Security & ISO 27001
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-750 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
              <a href="#experience">View Experience</a>
            </Button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Integration</h3>
              <p className="text-muted-foreground text-center">Reduced security incidents by 50% through ISO 27001 implementation</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-muted-foreground text-center">AWS expert with experience across 30+ services and tools</p>
            </div>
            
            <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Blockchain Expertise</h3>
              <p className="text-muted-foreground text-center">Led 20+ blockchain projects across Latin America, Caribbean, and Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;