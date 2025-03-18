
import { Linkedin, Github, Mail, Calendar, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-card border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-5 mb-4">
              <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:renzo@avila.ws" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://calendar.app.google/oy7TjX11PNBx6PoJ9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Calendar className="h-5 w-5" />
                <span className="sr-only">Calendar</span>
              </a>
              <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Location</span>
              </a>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Renzo Avila. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
