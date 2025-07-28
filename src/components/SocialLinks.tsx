import { Github, Linkedin, Twitter, Code2, Terminal } from "lucide-react";
import { Button } from "./ui/button";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ravixpanchal/",
      icon: Linkedin,
      color: "text-blue-400"
    },
    {
      name: "GitHub", 
      url: "https://github.com/ravixpanchal",
      icon: Github,
      color: "text-foreground"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/ravixpanchal",
      icon: Twitter,
      color: "text-blue-300"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/ravixpanchal/",
      icon: Code2,
      color: "text-yellow-400"
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/ravixpanchal",
      icon: Terminal,
      color: "text-green-400"
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Button
            key={link.name}
            variant="terminal"
            size="sm"
            asChild
            className="social-link"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconComponent className={`w-4 h-4 ${link.color}`} />
              <span className="font-mono text-xs">{link.name}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};