import { getVersionInfo } from "@/config/version";
import { useTheme } from "@/context/use-theme";

interface VersionBadgeProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export function VersionBadge({ position = "bottom-right" }: VersionBadgeProps) {
  const { theme } = useTheme();
  const versionInfo = getVersionInfo();
  const isDev = versionInfo.environment !== "production";
  
  // Solo mostramos en desarrollo o cuando hay un parámetro ?showVersion=true en la URL
  const shouldShow = isDev || new URLSearchParams(window.location.search).has("showVersion");
  
  if (!shouldShow) return null;
  
  // Definir posición según el parámetro
  const positionClasses = {
    "bottom-right": "bottom-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "top-right": "top-2 right-2",
    "top-left": "top-2 left-2",
  };
  
  // Definir color según el entorno
  const environmentColor = isDev ? "bg-amber-500" : "bg-emerald-500";
  
  return (
    <div 
      className={`fixed ${positionClasses[position]} z-50 px-2 py-1 text-xs font-mono rounded-md opacity-70 hover:opacity-100 transition-opacity ${
        theme === "dark" ? "text-white" : "text-white"
      } ${environmentColor}`}
      title={`Fecha de build: ${new Date(versionInfo.buildDate).toLocaleString()}`}
    >
      {versionInfo.version} ({versionInfo.environment})
    </div>
  );
} 