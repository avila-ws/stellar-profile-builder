import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeProvider";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSelector } from "@/components/ui/language-selector";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3 dark:bg-background/80" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-primary font-semibold text-xl">Renzo Avila</a>
        
        <div className="hidden md:flex space-x-8" role="navigation">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">{t('navigation.home')}</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">{t('about.title')}</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">{t('experience.title')}</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t('contact.title')}</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          
          <LanguageSelector className="hidden md:flex" />
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          
          <a href="#contact" className="hidden md:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            {t('contact.title')}
          </a>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden" role="navigation">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md shadow-sm dark:bg-background/80">
            <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">{t('navigation.home')}</a>
            <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">{t('about.title')}</a>
            <a href="#experience" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">{t('experience.title')}</a>
            <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">{t('contact.title')}</a>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
