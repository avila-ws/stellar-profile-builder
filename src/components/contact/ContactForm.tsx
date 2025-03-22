import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sanitizeText } from "@/lib/security";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data and sanitize it
    const formData = new FormData(e.currentTarget);
    const sanitizedData = {
      name: sanitizeText(formData.get('name') as string),
      email: sanitizeText(formData.get('email') as string),
      subject: sanitizeText(formData.get('subject') as string),
      message: sanitizeText(formData.get('message') as string),
    };
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.success'),
        description: t('contact.success_description'),
      });
      
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border h-full">
      <h3 className="text-2xl font-semibold mb-6">{t('contact.form_title')}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">{t('contact.name')}</label>
            <Input 
              id="name" 
              name="name"
              placeholder={t('contact.name_placeholder')} 
              required 
              className="transition-all duration-300 focus:scale-101"
              autoComplete="name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">{t('contact.email_label')}</label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder={t('contact.email_placeholder')} 
              required 
              className="transition-all duration-300 focus:scale-101"
              autoComplete="email"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">{t('contact.subject')}</label>
          <Input 
            id="subject" 
            name="subject"
            placeholder={t('contact.subject_placeholder')} 
            required 
            className="transition-all duration-300 focus:scale-101"
            autoComplete="off"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">{t('contact.message')}</label>
          <Textarea 
            id="message" 
            name="message"
            placeholder={t('contact.message_placeholder')} 
            className="min-h-[150px] transition-all duration-300 focus:scale-101" 
            required
            autoComplete="off"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('contact.sending')}
            </>
          ) : (
            t('contact.send')
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
