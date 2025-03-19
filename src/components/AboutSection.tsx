
import { Shield } from "lucide-react";
import EducationSection from "./about/EducationSection";
import LanguageSection from "./about/LanguageSection";
import KeyAchievements from "./about/KeyAchievements";
import CompaniesWorked from "./about/CompaniesWorked";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              With over 6 years of experience as a DevSecOps Engineer, I've dedicated my career to bridging the gap between development, operations, and security. I specialize in creating robust security frameworks that don't slow down innovation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My work spans across various industries, particularly in fintech and blockchain, where I've implemented security measures that protect sensitive data while enabling rapid deployment cycles.
            </p>
            
            <div className="space-y-8 mt-8">
              <EducationSection />
              <LanguageSection />
            </div>
          </div>
          
          <div className="space-y-6">
            <KeyAchievements />
            <CompaniesWorked />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
