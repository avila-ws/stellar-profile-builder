
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="animate-slide-in-bottom animation-delay-300">
      <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6 stagger-animation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 opacity-0 animation-delay-100">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" placeholder="Your name" required className="transition-all duration-300 focus:scale-101" />
          </div>
          
          <div className="space-y-2 opacity-0 animation-delay-200">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your email" required className="transition-all duration-300 focus:scale-101" />
          </div>
        </div>
        
        <div className="space-y-2 opacity-0 animation-delay-300">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <Input id="subject" placeholder="Subject" required className="transition-all duration-300 focus:scale-101" />
        </div>
        
        <div className="space-y-2 opacity-0 animation-delay-400">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea 
            id="message" 
            placeholder="Your message" 
            className="min-h-[150px] transition-all duration-300 focus:scale-101" 
            required 
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full sm:w-auto opacity-0 animation-delay-500 transition-all duration-300 hover:scale-105"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
