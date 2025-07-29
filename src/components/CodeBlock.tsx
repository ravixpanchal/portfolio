interface CodeBlockProps {
  children: string;
  language?: string;
}

export const CodeBlock = ({ children, language = "javascript" }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
        <div className="flex gap-1 sm:gap-2">
          <div className="terminal-dot terminal-red"></div>
          <div className="terminal-dot terminal-yellow"></div>
          <div className="terminal-dot terminal-green"></div>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">{language}</span>
      </div>
      <pre className="text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto">
        <code className="text-primary whitespace-pre-wrap break-words sm:whitespace-pre">{children}</code>
      </pre>
    </div>
  );
};