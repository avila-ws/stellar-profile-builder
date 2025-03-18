
import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactInfoProps {
  onScheduleClick: () => void;
}

const ContactInfo = ({ onScheduleClick }: ContactInfoProps) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href="mailto:renzo@avila.ws" className="font-medium hover:text-primary transition-colors">renzo@avila.ws</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">+44 330 122 9696</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Schedule a meeting</p>
            <Button variant="link" className="font-medium hover:text-primary transition-colors p-0 h-auto" onClick={onScheduleClick}>
              Book a time on my calendar <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">Barcelona, Spain</a>
          </div>
        </div>
        
        <h4 className="text-xl font-medium mt-8 mb-4">Connect with me</h4>
        
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent transition-colors p-4 rounded-full border">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent transition-colors p-4 rounded-full border">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
