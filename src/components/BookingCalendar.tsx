
import React from "react";

const BookingCalendar = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-foreground">Schedule a Meeting</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 dark:bg-card">
        {/* Google Calendar Appointment Scheduling integration */}
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ border: 0 }} 
          width="100%" 
          height="1050" 
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="bg-white dark:bg-gray-100"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
