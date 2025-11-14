import { Building2, Building, Home, Palmtree, Landmark, Server, Globe } from "lucide-react";
import React from "react";

/**
 * Configuración de iconos para empresas
 * Este archivo centraliza todos los iconos utilizados para representar las empresas
 */

export const companyIcons = {
  iag: <Globe className="h-5 w-5 text-primary" />,
  r2: <Building2 className="h-5 w-5 text-primary" />,
  b89: <Building className="h-5 w-5 text-primary" />,
  bcp: <Landmark className="h-5 w-5 text-primary" />,
  kellerWilliams: <Home className="h-5 w-5 text-primary" />,
  nttData: <Server className="h-5 w-5 text-primary" />,
  paraisoCreativo: <Palmtree className="h-5 w-5 text-primary" />
};

export default companyIcons; 