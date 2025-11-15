import { Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import companyUrls from "@/config/companies";

interface Company {
  name: string;
  description: string;
  url: string;
}

const CompaniesWorked = () => {
  const { t } = useLanguage();
  
  const companies: Company[] = [
    { name: "IAG", description: t('about.companies.iag'), url: companyUrls.iag },
    { name: "R2", description: t('about.companies.r2'), url: companyUrls.r2 },
    { name: "B89", description: t('about.companies.b89'), url: companyUrls.b89 },
    { name: "BCP", description: t('about.companies.bcp'), url: companyUrls.bcp },
    { name: "NTT DATA", description: t('about.companies.ntt'), url: companyUrls.nttData }
  ];
  
  return (
    <Card className="p-6 border shadow-sm">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
        {t('about.companies.title')}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <a 
            key={index}
            href={company.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center p-3 text-center gap-1 min-h-[110px] hover:bg-accent rounded-md transition-colors"
            aria-label={t('accessibility.visit_company_website', { company: company.name })}
          >
            <span className="font-medium text-sm leading-tight">{company.name}</span>
            <span className="text-xs text-muted-foreground leading-tight">{company.description}</span>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default CompaniesWorked;
