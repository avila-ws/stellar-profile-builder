
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BookingCalendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simular tiempo de carga para mostrar la animación
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <motion.div 
        className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.95 
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Google Calendar Appointment Scheduling integration */}
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ border: 0 }} 
          width="100%" 
          height="1050" 
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="bg-white"
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default BookingCalendar;
