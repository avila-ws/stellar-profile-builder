
import React from "react";
import TabsContainer from "@/components/contact/TabsContainer";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <TabsContainer />
      </div>
    </section>
  );
};

export default ContactSection;
