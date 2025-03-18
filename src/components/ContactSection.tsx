
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCalendar from "@/components/BookingCalendar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("message");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
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
  
  const contactInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };
  
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-muted/50 dark:bg-muted/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2">
            <TabsTrigger value="message" className="transition-all duration-300 relative overflow-hidden">
              <span>Send Message</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeTab === "message" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </TabsTrigger>
            <TabsTrigger value="schedule" className="transition-all duration-300 relative overflow-hidden">
              <span>Schedule Meeting</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeTab === "schedule" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <TabsContent value="message" className="outline-none">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center gap-4"
                      custom={0}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={contactInfoVariants}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Mail className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:renzo@avila.ws" className="font-medium hover:text-primary transition-colors">renzo@avila.ws</a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4"
                      custom={1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={contactInfoVariants}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Phone className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="https://wa.me/443301229696?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">+44 330 122 9696</a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4"
                      custom={2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={contactInfoVariants}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Calendar className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">Schedule a meeting</p>
                        <Button variant="link" className="font-medium hover:text-primary transition-colors p-0 h-auto" onClick={handleScheduleClick}>
                          Book a time on my calendar <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4"
                      custom={3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={contactInfoVariants}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <MapPin className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <a href="https://maps.app.goo.gl/QnToM6RPniyKprZD7" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">Barcelona, Spain</a>
                      </div>
                    </motion.div>
                    
                    <h4 className="text-xl font-medium mt-8 mb-4">Connect with me</h4>
                    
                    <div className="flex gap-4">
                      <motion.a 
                        href="https://www.linkedin.com/in/blockchain-security-devops-finance-devsecops-rust-engineer/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-card hover:bg-accent transition-colors p-4 rounded-full border"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Linkedin className="h-6 w-6" />
                      </motion.a>
                      <motion.a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-card hover:bg-accent transition-colors p-4 rounded-full border"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Github className="h-6 w-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                      >
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                          value={formState.name}
                          onChange={handleInputChange}
                          className="border-b focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          required 
                          value={formState.email}
                          onChange={handleInputChange}
                          className="border-b focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="Subject" 
                        required 
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="border-b focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        className="min-h-[150px] border-b focus:ring-2 focus:ring-primary/50 transition-all duration-300" 
                        required 
                        value={formState.message}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="schedule" className="outline-none">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <BookingCalendar />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default ContactSection;
