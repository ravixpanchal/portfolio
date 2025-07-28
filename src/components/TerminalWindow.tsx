import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="terminal-dot terminal-red"></div>
          <div className="terminal-dot terminal-yellow"></div>
          <div className="terminal-dot terminal-green"></div>
        </div>
        <div className="flex-1 text-center text-sm text-muted-foreground font-mono">
          {title}
        </div>
        <div className="w-16"></div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};