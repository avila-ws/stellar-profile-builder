
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Globe, Video } from "lucide-react";

const BookingCalendar = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
        
        <div className="w-full">
          {/* Google Calendar Appointment Scheduling integration */}
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RKCJXNFIQLYjZhar5z2JTUIK5ap37_6yYwdKoWJtmqjnv4wukx8T-JIMIRGTGqiaORDc2LY3J?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          ></iframe>
        </div>
      </div>
      
      <div className="relative">
        <Card className="p-6 border shadow-md sticky top-24">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src="/lovable-uploads/78d2e6ac-44c0-4542-ab78-92637203a5fd.png" alt="Renzo Avila" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Renzo Avila</h3>
              <p className="text-sm text-muted-foreground">DevSecOps Engineer</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 border-b pb-3">
              <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Barcelona, Spain</p>
                <p className="text-sm text-muted-foreground">Central European Time</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Video className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Google Meet</p>
                <p className="text-sm text-muted-foreground">You'll receive a link after booking</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingCalendar;
