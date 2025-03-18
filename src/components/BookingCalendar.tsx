
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BookingCalendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading time to show the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Card hover animation
  const calendarCardAnimation = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };
  
  // Parallax effect for the background
  const parallaxBg = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.05,
      transition: { duration: 1 }
    }
  };
  
  return (
    <motion.div 
      className="container mx-auto px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Parallax background decoration */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"
        initial="initial"
        animate="animate"
        variants={parallaxBg}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"
        initial="initial"
        animate="animate"
        variants={parallaxBg}
      />
      
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <motion.div 
        className="w-full bg-card dark:bg-card/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border border-border/50"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={calendarCardAnimation}
      >
        {/* Entry animation for iframe */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 50 
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth entrance
          }}
        >
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="1050" 
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
            className="bg-white dark:bg-black/20"
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BookingCalendar;
