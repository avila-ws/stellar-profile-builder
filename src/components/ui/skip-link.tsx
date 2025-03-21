import { cn } from "@/lib/utils";
import React from "react";

interface SkipLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function SkipLink({ href, className, children, ...props }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-none focus:border-primary focus:border-2 focus:top-2 focus:left-2 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
} 