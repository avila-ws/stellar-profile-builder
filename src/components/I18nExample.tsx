import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function I18nExample() {
  // Using the common namespace (default)
  const { t: tCommon } = useLanguage('common');
  
  // Using the profile namespace explicitly
  const { t: tProfile } = useLanguage('profile');
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{tCommon('about.title')}</h2>
        <LanguageSelector />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{tProfile('name')}</CardTitle>
          <CardDescription>{tProfile('headline')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {tProfile('summary')}
          </p>
          
          <h3 className="font-medium text-lg mb-2">{tCommon('experience.title')}</h3>
          <ul className="space-y-2">
            {/* Accessing nested array data from the translation */}
            <li className="pl-4 border-l-2 border-primary">
              <div className="font-medium">{tProfile('experience.0.company')} - {tProfile('experience.0.position')}</div>
              <div className="text-sm text-muted-foreground">{tProfile('experience.0.period')}</div>
              <div className="text-sm mt-1">{tProfile('experience.0.achievements.0')}</div>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="text-sm text-muted-foreground">
        <p>
          This component demonstrates how to use i18n with multiple namespaces. 
          Try switching the language to see the content change.
        </p>
      </div>
    </div>
  );
}

export default I18nExample; 