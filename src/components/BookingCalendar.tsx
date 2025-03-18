
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Calendar as CalendarIcon, Globe, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const meetingTypes = [
  {
    id: "15min",
    title: "15 Min Meeting",
    duration: "15m",
    description: "Quick call to discuss basic questions or introductions",
  },
  {
    id: "30min",
    title: "30 Min Meeting",
    duration: "30m",
    description: "Standard consultation for specific technical queries or project discussions",
  },
  {
    id: "60min",
    title: "Co-building Session",
    duration: "60m",
    description: "Extended session for in-depth project planning or collaborative problem-solving",
  },
];

const generateTimeSlots = () => {
  const slots = [];
  // Generate time slots from 9 AM to 6 PM
  for (let hour = 9; hour < 18; hour++) {
    const timeString = `${hour}:00 - ${hour}:30`;
    slots.push(timeString);
    
    const timeString2 = `${hour}:30 - ${hour + 1}:00`;
    slots.push(timeString2);
  }
  return slots;
};

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });
  const { toast } = useToast();
  
  const timeSlots = generateTimeSlots();
  
  const handleNext = () => {
    if (step === 1 && !selectedMeeting) {
      toast({
        title: "Please select a meeting type",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && (!date || !selectedTime)) {
      toast({
        title: "Please select a date and time",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 3) {
      if (!formData.name || !formData.email) {
        toast({
          title: "Please fill in your name and email",
          variant: "destructive",
        });
        return;
      }
      
      // Here we would normally submit the form and create the calendar event
      toast({
        title: "Booking confirmed!",
        description: `Your meeting has been scheduled for ${date?.toLocaleDateString()} at ${selectedTime}.`,
      });
      
      // Reset the form
      setStep(1);
      setSelectedMeeting("");
      setSelectedTime("");
      setDate(new Date());
      setFormData({
        name: "",
        email: "",
        notes: "",
      });
      return;
    }
    
    setStep(step + 1);
  };
  
  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const currentMeeting = meetingTypes.find(meeting => meeting.id === selectedMeeting);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
        
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">Select the type of meeting you'd like to schedule:</p>
            
            <div className="space-y-3">
              {meetingTypes.map((meeting) => (
                <Card 
                  key={meeting.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${selectedMeeting === meeting.id ? 'border-primary ring-2 ring-primary/20' : ''}`}
                  onClick={() => setSelectedMeeting(meeting.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{meeting.title}</h4>
                      <p className="text-muted-foreground text-sm">{meeting.description}</p>
                    </div>
                    <div className="flex items-center bg-muted rounded-full px-3 py-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{meeting.duration}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <Button variant="outline" className="mb-4" onClick={handleBack}>
              Back to Meeting Types
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Select Date:</p>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                  disabled={(date) => {
                    const now = new Date();
                    // Disable dates in the past and weekends
                    return (
                      date < new Date(now.setHours(0, 0, 0, 0)) ||
                      date.getDay() === 0 ||
                      date.getDay() === 6
                    );
                  }}
                />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Select Time ({currentMeeting?.duration}):</p>
                <div className="h-72 overflow-y-auto border rounded-md p-2">
                  <div className="grid grid-cols-1 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setSelectedTime(time)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <Button variant="outline" className="mb-4" onClick={handleBack}>
              Back to Date & Time
            </Button>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name*</label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Your Email*</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">Notes (Optional)</label>
                <Textarea 
                  id="notes" 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleInputChange} 
                  placeholder="Add any details about what you'd like to discuss" 
                  rows={4} 
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Confirm Booking</Button>
            </div>
          </div>
        )}
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
            {selectedMeeting && (
              <div className="flex items-start gap-3 border-b pb-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">{currentMeeting?.title}</p>
                  <p className="text-sm text-muted-foreground">{currentMeeting?.duration} meeting</p>
                </div>
              </div>
            )}
            
            {date && (
              <div className="flex items-start gap-3 border-b pb-3">
                <CalendarIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">{date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  {selectedTime && <p className="text-sm text-muted-foreground">{selectedTime}</p>}
                </div>
              </div>
            )}
            
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
