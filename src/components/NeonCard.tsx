import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent";
}

export const NeonCard = ({ children, className = "", glowColor = "primary" }: NeonCardProps) => {
  const glowColors = {
    primary: "shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
    secondary: "shadow-[0_0_30px_hsl(var(--secondary)/0.5)]", 
    accent: "shadow-[0_0_30px_hsl(var(--accent)/0.5)]"
  };

  return (
    <div className={`
      terminal-window 
      hover:${glowColors[glowColor]} 
      transition-all duration-500 
      transform hover:scale-105 hover:-translate-y-2
      ${className}
    `}>
      {children}
    </div>
  );
};