interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 text-red-500 animate-pulse"
        style={{ 
          transform: 'translate(-2px, -2px)',
          opacity: 0.7,
          animation: 'hologram-flicker 0.15s ease-in-out infinite'
        }}
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 text-cyan-500 animate-pulse"
        style={{ 
          transform: 'translate(2px, 2px)',
          opacity: 0.7,
          animation: 'hologram-flicker 0.1s ease-in-out infinite reverse'
        }}
      >
        {text}
      </span>
    </div>
  );
};