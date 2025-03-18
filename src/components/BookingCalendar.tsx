
import React from "react";

const BookingCalendar = () => {
  return (
    <div className="bg-card rounded-lg shadow-sm p-6 border animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        {/* Google Calendar Appointment Scheduling integration */}
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
          style={{ border: 0 }} 
          width="100%" 
          height="650" 
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="bg-white"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
