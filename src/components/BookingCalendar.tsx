
import React, { useEffect, useRef } from "react";

const BookingCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-6 slide-in-bottom">Schedule a Meeting</h3>
      
      <div 
        ref={calendarRef} 
        className="w-full bg-white rounded-lg overflow-hidden shadow-md opacity-0 translate-y-4 transition-all duration-700 card-hover"
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
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
