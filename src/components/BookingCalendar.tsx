
import React, { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BookingCalendar = () => {
  const isMobile = useIsMobile();
  const [iframeHeight, setIframeHeight] = useState(isMobile ? 1700 : 1050);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Update height based on device type
    setIframeHeight(isMobile ? 1700 : 1050);
    
    // Add message event listener to receive height from iframe content
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is from Google Calendar
      if (event.origin.includes('calendar.google.com') && 
          event.data && typeof event.data === 'number') {
        // Add padding to the height
        const padding = isMobile ? 250 : 50;
        setIframeHeight(event.data + padding);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Ensure the iframe is visible when switching tabs
    const resizeIframe = () => {
      // Force a height update after a slight delay
      setTimeout(() => {
        if (isMobile) {
          setIframeHeight(prev => prev === 1700 ? 1701 : 1700); // Trigger a re-render
        }
      }, 300);
    };
    
    window.addEventListener('resize', resizeIframe);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', resizeIframe);
    };
  }, [isMobile]);

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <iframe 
          ref={iframeRef}
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ 
            border: 0, 
            height: `${iframeHeight}px`, 
            minHeight: isMobile ? "1700px" : "1000px",
            width: "100%"
          }} 
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
