
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import BookingCalendar from "@/components/BookingCalendar";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState("message");
  
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
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2 animate-slide-in-top">
        <TabsTrigger value="message" className="transition-all duration-300">Send Message</TabsTrigger>
        <TabsTrigger value="schedule" className="transition-all duration-300">Schedule Meeting</TabsTrigger>
      </TabsList>
      
      <TabsContent value="message" className="animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo onScheduleClick={handleScheduleClick} />
          <ContactForm />
        </div>
      </TabsContent>
      
      <TabsContent value="schedule" className="animate-fade-in">
        <BookingCalendar />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
