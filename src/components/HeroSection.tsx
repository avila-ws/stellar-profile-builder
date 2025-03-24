import { Shield, Code, Cloud } from "lucide-react";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";
import contactConfig from "@/config/contact";

// Subcomponente para el avatar
interface ProfileAvatarProps {
  isVisible: boolean;
  animateAvatar: boolean;
  name: string;
}

const ProfileAvatar = ({ isVisible, animateAvatar, name }: ProfileAvatarProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`mb-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
      <Dialog>
        <DialogTrigger asChild>
          <button 
            type="button"
            className="cursor-pointer transition-all duration-300 hover:scale-105 bg-transparent border-0 p-0"
            aria-label={t('hero.view_profile_photo')}
          >
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 profile-gradient-border"></div>
              <Avatar className={`w-40 h-40 transition-all duration-300 rounded-full overflow-hidden relative z-10 ${animateAvatar ? "opacity-100" : "opacity-90"}`}>
                <AvatarImage src="/lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png" alt={name} />
                <AvatarFallback className="text-2xl font-bold">RA</AvatarFallback>
              </Avatar>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-md w-auto flex items-center justify-center">
          <DialogTitle className="sr-only">{name} Profile Photo</DialogTitle>
          <div className="relative w-full">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <img src="/lovable-uploads/74204ed6-b70d-42fc-962a-ad475ddd4383.png" alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Subcomponente para los enlaces de contacto
interface ContactLinksProps {
  isVisible: boolean;
  highlightIndex: number;
}

const ContactLinks = ({ isVisible, highlightIndex }: ContactLinksProps) => {
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
  return (
    <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
      <a 
        href={contactConfig.urls.location}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
          ${highlightIndex === 0 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
      >
        <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{tProfile('location')}</span>
      </a>
      <span className="text-muted-foreground">•</span>
      <a 
        href={contactConfig.urls.linkedin}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
          ${highlightIndex === 1 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
      >
        <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{tProfile('contact.linkedin')}</span>
      </a>
      <span className="text-muted-foreground">•</span>
      <a 
        href={`https://wa.me/${contactConfig.phone.whatsappCode}?text=${encodeURIComponent(t('contact.whatsapp_message'))}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
          ${highlightIndex === 2 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
      >
        <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{tProfile('contact.phone')}</span>
      </a>
      <span className="text-muted-foreground">•</span>
      <a 
        href={contactConfig.urls.googleCalendar}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center text-sm hover:text-primary transition-colors hover:scale-105 hover:font-medium contact-link relative
          ${highlightIndex === 3 ? 'text-primary animate-iridescent-glow' : 'text-muted-foreground'}`}
      >
        <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{tProfile('contact.email')}</span>
      </a>
    </div>
  );
};

// Subcomponente para los botones CTA
interface CTAButtonsProps {
  isVisible: boolean;
}

const CTAButtons = ({ isVisible }: CTAButtonsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-750 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
      <Button asChild size="lg" className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
        <a href="#contact">{t('contact.title')}</a>
      </Button>
      <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform border-2 hover:border-primary/50">
        <a href="#experience">{t('experience.title')}</a>
      </Button>
    </div>
  );
};

// Subcomponente para las tarjetas de especialidades
interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecialtyCard = ({ icon, title, description }: SpecialtyCardProps) => {
  return (
    <div className="flex flex-col items-center bg-card p-6 rounded-lg shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};

// Subcomponente para la sección de especialidades
interface SpecialtiesProps {
  isVisible: boolean;
}

const Specialties = ({ isVisible }: SpecialtiesProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <SpecialtyCard 
        icon={<Shield className="h-12 w-12 text-primary mb-4 scale-in" />}
        title={t('hero.security_integration')}
        description={t('hero.security_description')}
      />
      
      <SpecialtyCard 
        icon={<Cloud className="h-12 w-12 text-primary mb-4 scale-in" />}
        title={t('hero.cloud_infrastructure')}
        description={t('hero.cloud_description')}
      />
      
      <SpecialtyCard 
        icon={<Code className="h-12 w-12 text-primary mb-4 scale-in" />}
        title={t('hero.blockchain_expertise')}
        description={t('hero.blockchain_description')}
      />
    </div>
  );
};

// Componente principal HeroSection
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateAvatar, setAnimateAvatar] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const { t } = useLanguage();
  const { t: tProfile } = useLanguage('profile');
  
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
  
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className={`inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            {tProfile('headline')}
          </div>
          
          <ProfileAvatar 
            isVisible={isVisible} 
            animateAvatar={animateAvatar}
            name={tProfile('name')}
          />
          
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            {tProfile('name')}
          </h1>
          
          <p className={`text-xl md:text-2xl text-foreground/80 max-w-3xl mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            {tProfile('summary')}
          </p>
          
          <ContactLinks 
            isVisible={isVisible} 
            highlightIndex={highlightIndex} 
          />
          
          <p className={`text-lg text-muted-foreground max-w-3xl mb-10 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            {t('hero.languages_specialties')}
          </p>
          
          <CTAButtons isVisible={isVisible} />
          
          <Specialties isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
