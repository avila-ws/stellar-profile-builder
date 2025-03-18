
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Renzo led our AWS security implementation and reduced our vulnerability incidents by 45%. His knowledge of DevSecOps principles transformed our approach to security.",
    author: "Maria Rodriguez",
    role: "CTO",
    company: "FinTech Solutions Inc."
  },
  {
    quote: "Working with Renzo on our blockchain security framework was exceptional. His attention to detail and expertise helped us achieve ISO 27001 compliance months ahead of schedule.",
    author: "John Meyer",
    role: "Head of Information Security",
    company: "Blockchain Innovations Ltd."
  },
  {
    quote: "Renzo's implementation of automated security testing in our CI/CD pipeline was game-changing. We've seen a dramatic reduction in production issues since his involvement.",
    author: "Sophia Chen",
    role: "DevOps Director",
    company: "Global Systems Corp."
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 slide-in-top">What Colleagues Say</h2>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col p-8">
                    <div className="mb-4 text-primary">
                      <Quote size={32} />
                    </div>
                    <p className="text-lg mb-6 italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mx-2" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
