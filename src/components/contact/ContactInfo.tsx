import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface ContactInfoProps {
  onScheduleClick: () => void;
}

const ContactInfo = ({
  onScheduleClick
}: ContactInfoProps) => {
  return (
    <div className="animate-slide-in-bottom bg-card rounded-lg shadow-sm p-6 border h-full">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6 stagger-animation">
        <a href="mailto:renzo@avila.ws" className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in">
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Mail className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <span className="font-medium hover:text-primary transition-colors">renzo@avila.ws</span>
          </div>
        </a>
        
        <a href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in">
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Phone className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Phone</p>
            <span className="font-medium hover:text-primary transition-colors">+44 330 122 9696</span>
          </div>
        </a>
        
        <div onClick={onScheduleClick} className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in relative">
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white pulse-animation">
            <Calendar className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Schedule a meeting</p>
            <span className="font-medium transition-colors flex items-center text-[#0060c0] group-hover:text-primary">
              Book a time on my calendar <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
        
        <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in">
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Location</p>
            <span className="font-medium hover:text-primary transition-colors">Barcelona, Spain</span>
          </div>
        </a>
        
        <h4 className="text-xl font-medium mt-8 mb-4">Connect with me</h4>
        
        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-card hover:bg-primary hover:text-white transition-colors p-4 rounded-full border hover:scale-110 transform transition-transform duration-300 shadow-sm hover:shadow-md"
                   aria-label="LinkedIn Profile">
                  <Linkedin className="h-6 w-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect on LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-card hover:bg-primary hover:text-white transition-colors p-4 rounded-full border hover:scale-110 transform transition-transform duration-300 shadow-sm hover:shadow-md"
                   aria-label="GitHub Profile">
                  <Github className="h-6 w-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View GitHub Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
