
import React from "react";

const BookingCalendar = () => {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
      
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        {/* Cal.com Booking Embed */}
        <iframe 
          src="https://cal.com/renzo/30min" 
          style={{ border: 0 }} 
          width="100%" 
          height="600" 
          frameBorder="0"
          title="Cal.com Booking"
          className="bg-white"
          allow="camera; microphone; autoplay; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingCalendar;
