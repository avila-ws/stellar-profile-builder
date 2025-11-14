import Button from "@/components/ui/button";
import { useLanguage, SUPPORTED_LANGUAGES, Language } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const labels: Record<Language, string> = {
    en: "English",
    es: "Español",
    ca: "Català"
  };

  const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLanguage);
  const nextLanguage = SUPPORTED_LANGUAGES[(currentIndex + 1) % SUPPORTED_LANGUAGES.length];

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className={className}
      aria-label={`Change language to ${labels[nextLanguage]}`}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 text-xs font-semibold">{currentLanguage.toUpperCase()}</span>
    </Button>
  );
}

export default LanguageToggle; 