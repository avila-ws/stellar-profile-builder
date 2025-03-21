import React from "react";
import TabsContainer from "@/components/contact/TabsContainer";
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10 relative overflow-hidden">
      {/* Add decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">{t('contact.lets_connect')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <TabsContainer />
      </div>
    </section>
  );
};

export default ContactSection;
