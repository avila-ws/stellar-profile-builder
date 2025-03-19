
import React, { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BookingCalendar = () => {
  const isMobile = useIsMobile();
  const [iframeHeight, setIframeHeight] = useState(isMobile ? 600 : 1050);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Update height when mobile status changes
    setIframeHeight(isMobile ? 600 : 1050);
    
    // Add message event listener to receive height from iframe content
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is from Google Calendar
      if (event.origin.includes('calendar.google.com') && 
          event.data && typeof event.data === 'number') {
        // Add some padding to the height
        setIframeHeight(event.data + 50);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isMobile]);

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        {/* Google Calendar Appointment Scheduling integration with dynamic height */}
        <iframe 
          ref={iframeRef}
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ border: 0, height: `${iframeHeight}px`, minHeight: isMobile ? "500px" : "800px" }} 
          width="100%" 
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="bg-white transition-all duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
