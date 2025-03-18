
import { Mail, Linkedin, Github, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  <a href="https://calendar.app.google/oy7TjX11PNBx6PoJ9" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">Book a time on my calendar</a>
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
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
