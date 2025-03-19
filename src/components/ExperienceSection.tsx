
import WorkHistory from "@/components/experience/WorkHistory";
import TechnicalSkills from "@/components/experience/TechnicalSkills";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <WorkHistory />
          <TechnicalSkills />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
