import { ReactNode } from "react";

interface ParticleBackgroundProps {
  children: ReactNode;
}

export const ParticleBackground = ({ children }: ParticleBackgroundProps) => {
  return (
    <div className="relative">
      {/* Cyber background */}
      <div className="cyber-bg"></div>
      
      {/* Grid overlay */}
      <div className="grid-overlay"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {children}
    </div>
  );
};