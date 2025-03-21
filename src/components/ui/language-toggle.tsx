import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className={className}
      aria-label={`Change language to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 text-xs font-semibold">{currentLanguage.toUpperCase()}</span>
    </Button>
  );
}

export default LanguageToggle; 