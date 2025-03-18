
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCalendar from "@/components/BookingCalendar";
import { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("message");
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactInfoRef.current) {
      observer.observe(contactInfoRef.current);
    }

    if (formRef.current) {
      observer.observe(formRef.current);
      
      // Add staggered animation for form inputs
      const inputs = formRef.current.querySelectorAll('input, textarea');
      inputs.forEach((input, index) => {
        input.style.opacity = '0';
        input.style.transform = 'translateY(10px)';
        input.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        input.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
          input.style.opacity = '1';
          input.style.transform = 'translateY(0)';
        }, 300 + index * 100);
      });
    }

    return () => {
      if (contactInfoRef.current) {
        observer.unobserve(contactInfoRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, [activeTab]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add success animation
    const button = e.currentTarget.querySelector('button[type="submit"]');
    if (button) {
      button.classList.add('success-animation');
      setTimeout(() => {
        button.classList.remove('success-animation');
      }, 2000);
    }
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  const handleScheduleClick = () => {
    // Directly update the active tab state
    setActiveTab("schedule");
    
    // Scroll to contact section after a short delay to ensure tab switch has happened
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  
  // Add animation for contact info items
  const animateInfoItem = (index: number) => {
    return {
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `fadeIn 0.5s ease-out ${0.1 * index}s forwards`,
    };
  };
  
  return (
    <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2 scale-in">
            <TabsTrigger value="message" className="transition-all duration-200">Send Message</TabsTrigger>
            <TabsTrigger value="schedule" className="transition-all duration-200">Schedule Meeting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="message">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div ref={contactInfoRef} className="opacity-0 translate-y-4 transition-all duration-700">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6 stagger-animation">
                  <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-primary/10 p-3 rounded-full float-animation">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:renzo@avila.ws" className="font-medium hover:text-primary transition-colors animated-underline">renzo@avila.ws</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-primary/10 p-3 rounded-full float-animation">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors animated-underline">+44 330 122 9696</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-primary/10 p-3 rounded-full float-animation">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Schedule a meeting</p>
                      <Button variant="link" className="font-medium hover:text-primary transition-colors p-0 h-auto group" onClick={handleScheduleClick}>
                        Book a time on my calendar <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-primary/10 p-3 rounded-full float-animation">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors animated-underline">Barcelona, Spain</a>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-medium mt-8 mb-4">Connect with me</h4>
                  
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent transition-colors p-4 rounded-full border hover:scale-110 transition-transform duration-300">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent transition-colors p-4 rounded-full border hover:scale-110 transition-transform duration-300">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 slide-in-bottom">Send me a message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 opacity-0 translate-y-4 transition-all duration-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-101" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-101" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Subject" required className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-101" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-101" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sm:w-auto hover-scale pulse-animation">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule">
            <BookingCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ContactSection;
