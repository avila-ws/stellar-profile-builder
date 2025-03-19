
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Led ISO 27001 certification",
    description: "Reduced security incidents by 50% and enhanced AWS security with robust endpoint protection"
  },
  {
    title: "Enhanced code analysis",
    description: "Improved software protection by 45% and reduced production vulnerabilities by 25%"
  },
  {
    title: "Blockchain leadership",
    description: "Directed key blockchain projects with 60% increase in transaction throughput and 40% decrease in costs"
  },
  {
    title: "CI/CD pipeline automation",
    description: "Embedded compliance enforcement, vulnerability scanning, and security gates into development lifecycle"
  }
];

const KeyAchievements = () => {
  return (
    <Card className="p-6 border shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
      
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <span className="font-medium">{achievement.title}</span>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default KeyAchievements;
