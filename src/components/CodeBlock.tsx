interface CodeBlockProps {
  children: string;
  language?: string;
}

export const CodeBlock = ({ children, language = "javascript" }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          <div className="terminal-dot terminal-red"></div>
          <div className="terminal-dot terminal-yellow"></div>
          <div className="terminal-dot terminal-green"></div>
        </div>
        <span className="text-xs text-muted-foreground">{language}</span>
      </div>
      <pre className="text-sm leading-relaxed">
        <code className="text-primary">{children}</code>
      </pre>
    </div>
  );
};