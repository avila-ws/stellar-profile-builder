
import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BookingCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle animation and intersection observer
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

    if (calendarRef.current) {
      observer.observe(calendarRef.current);
    }

    return () => {
      if (calendarRef.current) {
        observer.unobserve(calendarRef.current);
      }
    };
  }, []);

  // Handle iframe loading state
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-6 slide-in-bottom">Schedule a Meeting</h3>
      
      <Card 
        ref={calendarRef} 
        className="w-full bg-white dark:bg-muted rounded-lg overflow-hidden shadow-md opacity-0 translate-y-4 transition-all duration-700 card-hover"
      >
        {isLoading && (
          <div className="p-4 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-64 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        )}
        
        <iframe 
          ref={iframeRef}
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ 
            border: 0,
            display: isLoading ? 'none' : 'block'
          }} 
          width="100%" 
          height="1050" 
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="bg-white dark:bg-muted"
          onLoad={handleIframeLoad}
          allow="camera; microphone"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </Card>
    </div>
  );
};

export default BookingCalendar;
