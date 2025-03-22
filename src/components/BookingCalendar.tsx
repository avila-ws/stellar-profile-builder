import React, { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import contactConfig from "@/config/contact";
import { sanitizeText } from "@/lib/security";

const ALLOWED_ORIGINS = [
  'https://calendar.google.com',
  'https://www.google.com',
  'http://localhost:8080',  // Para desarrollo local
  'http://localhost:3000',  // Para desarrollo local alternativo
];

const BookingCalendar = () => {
  const isMobile = useIsMobile();
  const [iframeHeight, setIframeHeight] = useState(isMobile ? 1785 : 1050);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Update height based on device type
    setIframeHeight(isMobile ? 1785 : 1050);
    
    // Add message event listener to receive height from iframe content
    const handleMessage = (event: MessageEvent) => {
      // Validate origin
      const eventOrigin = event.origin.toLowerCase();
      if (!ALLOWED_ORIGINS.some(origin => eventOrigin.includes(origin.toLowerCase()))) {
        console.warn(`Rejected message from unauthorized origin: ${sanitizeText(event.origin)}`);
        return;
      }

      // Ensure the message is from Google Calendar and validate data type
      if (event.data && typeof event.data === 'number' && event.data > 0 && event.data < 10000) {
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
          setIframeHeight(prev => prev === 1785 ? 1786 : 1785); // Trigger a re-render
        }
      }, 300);
    };
    
    window.addEventListener('resize', resizeIframe);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', resizeIframe);
    };
  }, [isMobile]);

  // Sanitize and validate the calendar URL
  const calendarUrl = new URL(contactConfig.urls.googleCalendar);
  if (!calendarUrl.hostname.endsWith('calendar.google.com')) {
    console.error('Invalid calendar URL detected');
    return null;
  }

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">{t('contact.schedule_meeting')}</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <iframe 
          ref={iframeRef}
          src={calendarUrl.toString()}
          style={{ 
            border: 0, 
            height: `${iframeHeight}px`, 
            minHeight: isMobile ? "1785px" : "1050px",
            width: "100%"
          }} 
          width="100%" 
          frameBorder="0"
          title={t('accessibility.calendar_iframe')}
          className="bg-white transition-all duration-300"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
