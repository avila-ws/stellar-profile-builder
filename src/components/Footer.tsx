import { Linkedin, Github, Mail, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import contactConfig from "@/config/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer role="contentinfo" className="py-10 bg-card border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-5 mb-4">
              <a href={contactConfig.urls.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors"
                 aria-label={t('accessibility.linkedin_profile')}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={contactConfig.urls.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors"
                 aria-label={t('accessibility.github_profile')}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={`mailto:${contactConfig.email}`} 
                 className="text-muted-foreground hover:text-primary transition-colors"
                 aria-label={t('accessibility.email_link')}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">{t('contact.email_label')}</span>
              </a>
              <a href={contactConfig.urls.googleCalendar} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors"
                 aria-label={t('accessibility.calendar_link')}>
                <Calendar className="h-5 w-5" />
                <span className="sr-only">{t('footer.calendar')}</span>
              </a>
              <a href={contactConfig.urls.location} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors"
                 aria-label={t('accessibility.location_link')}>
                <MapPin className="h-5 w-5" />
                <span className="sr-only">{t('contact.location_label')}</span>
              </a>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('navigation.home')}
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('navigation.about')}
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('navigation.experience')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('navigation.contact')}
            </a>
            <a href={contactConfig.urls.linkedin} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
