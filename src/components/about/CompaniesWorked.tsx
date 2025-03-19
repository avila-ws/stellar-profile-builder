
import { Building } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Company {
  name: string;
  description: string;
  url: string;
}

const companies: Company[] = [
  { name: "R2", description: "NeoBank Mexico", url: "https://r2.co/" },
  { name: "B89", description: "NeoBank Peru", url: "https://www.b89.io/" },
  { name: "BCP", description: "Bank Peru", url: "https://www.viabcp.com/" },
  { name: "Keller Williams", description: "Realty US", url: "https://www.kw.com/" },
  { name: "NTT DATA", description: "Consulting Peru", url: "https://pe.nttdata.com/" },
  { name: "Paraiso Creativo", description: "Consulting VE", url: "https://web.archive.org/web/20170914185910/http://paraisocreativo.com/" }
];

const CompaniesWorked = () => {
  return (
    <Card className="p-6 border shadow-sm">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
        Companies I've Worked With
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <a 
            key={index}
            href={company.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center p-2 hover:bg-accent rounded-md transition-colors"
          >
            <span className="font-medium">{company.name}</span>
            <span className="text-xs text-muted-foreground">{company.description}</span>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default CompaniesWorked;
