
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-primary font-semibold text-xl">Renzo Avila</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <a href="#contact" className="hidden md:inline-flex bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
