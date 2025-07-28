import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export const TypingEffect = ({ 
  text, 
  speed = 100, 
  className = "", 
  showCursor = true 
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} ${showCursor ? 'typing-cursor' : ''}`}>
      {displayText}
    </span>
  );
};