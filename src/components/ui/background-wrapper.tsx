"use client";

import { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface BackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundWrapper = ({ children, className = "" }: BackgroundWrapperProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div className={`relative ${className}`}>
      {/* Background based on theme */}
      {mounted && (
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `url('/backgrounds/${currentTheme === 'dark' ? 'bg-dark' : 'bg-light'}.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};