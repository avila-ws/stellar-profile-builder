import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useLanguage } from "@/hooks/useLanguage";
import contactConfig from "@/config/contact";

interface ContactInfoProps {
  onScheduleClick: () => void;
}

const ContactInfo = ({
  onScheduleClick
}: ContactInfoProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="animate-slide-in-bottom bg-card rounded-lg shadow-sm p-6 border h-full">
      <h3 className="text-2xl font-semibold mb-6">{t('contact.info_title')}</h3>
      
      <div className="space-y-6 stagger-animation">
        <a href={`mailto:${contactConfig.email}`} className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in" aria-label={t('accessibility.email_link')}>
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Mail className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{t('contact.email_label')}</p>
            <span className="font-medium hover:text-primary transition-colors">{contactConfig.email}</span>
          </div>
        </a>
        
        <a href={`https://wa.me/${contactConfig.phone.whatsappCode}?text=${encodeURIComponent(t('contact.whatsapp_message'))}`} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in" 
           aria-label={t('accessibility.phone_link')}>
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Phone className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{t('contact.phone_label')}</p>
            <span className="font-medium hover:text-primary transition-colors">{contactConfig.phone.number}</span>
          </div>
        </a>
        
        <div onClick={onScheduleClick} className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in relative" aria-label={t('accessibility.calendar_link')}>
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white pulse-animation">
            <Calendar className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{t('contact.schedule_label')}</p>
            <span className="font-medium transition-colors flex items-center text-[#0060c0] group-hover:text-primary">
              {t('contact.book_calendar')} <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
        
        <a href={contactConfig.urls.location} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-primary/5 p-2 rounded-md transition-all duration-300 transform hover:translate-x-1 scale-in" aria-label={t('accessibility.location_link')}>
          <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{t('contact.location_label')}</p>
            <span className="font-medium hover:text-primary transition-colors">{t('contact.location')}</span>
          </div>
        </a>
        
        <h4 className="text-xl font-medium mt-8 mb-4">{t('contact.connect_title')}</h4>
        
        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={contactConfig.urls.linkedin} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-card hover:bg-primary hover:text-white transition-colors p-4 rounded-full border hover:scale-110 transform transition-transform duration-300 shadow-sm hover:shadow-md"
                   aria-label={t('accessibility.linkedin_profile')}>
                  <Linkedin className="h-6 w-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('contact.connect_linkedin')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={contactConfig.urls.github} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-card hover:bg-primary hover:text-white transition-colors p-4 rounded-full border hover:scale-110 transform transition-transform duration-300 shadow-sm hover:shadow-md"
                   aria-label={t('accessibility.github_profile')}>
                  <Github className="h-6 w-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('contact.view_github')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
