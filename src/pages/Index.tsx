import { TerminalWindow } from "@/components/TerminalWindow";
import { SocialLinks } from "@/components/SocialLinks";
import { CodeBlock } from "@/components/CodeBlock";
import { TypingEffect } from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar, Coffee, Code, Terminal, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import { ContactForm } from "@/components/ContactForm";
import { AchievementsSection } from "@/components/AchievementsSection";
import { AIChatInterface } from "@/components/AIChatInterface";

const Index = () => {
  const codeSnippet = `const developer = {
  name: "Ravi Panchal",
  status: "#100DaysOfCode",
  currentlyLearning: ["Advanced DSA"],
  skills: ["AI/ML","Web Dev"],
  education: "Btech AI&DS'27 @GSV",
  previousExp: "Summer'25 Intern @AAI", 
  passion: "Building in Public",
  goals: ["Build Impactful Projects"]
};

console.log("Welcome to my portfolio!");`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-primary border-primary animate-glow">
              <Terminal className="w-3 h-3 mr-1" />
              Currently Active
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 neon-text animate-float">
              <TypingEffect text="Ravi Panchal" speed={150} />
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-mono mb-8 px-4">
              <TypingEffect 
                text="#100DaysOfCode in Progress | Summer'25 Intern @AAI | Ex-Intern @Indian Railways | Btech AI&DS'27 @GSV | Building in Public"
                speed={50}
                showCursor={false}
              />
            </div>
          </div>
          
          <SocialLinks />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <TerminalWindow title="about.js">
              <CodeBlock language="javascript">
                {codeSnippet}
              </CodeBlock>
            </TerminalWindow>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 neon-text">
                  <Code className="inline mr-2" />
                  About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed">
               Btech 3rd Year Student @GSV
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-mono">AI & Data Science Student</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-mono">Orai (India)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-mono">Graduating 2027</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="font-mono">DSA | Machine learning | Web Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 neon-text">
            <Sparkles className="inline mr-2" />
            Current Status
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-6 terminal-window">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-red"></div>
                  <div className="terminal-dot terminal-yellow"></div>
                  <div className="terminal-dot terminal-green"></div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-primary font-mono">#100DaysOfCode</h3>
                <p className="text-sm text-muted-foreground">
                  Currently on my coding journey, building projects and learning new technologies every day.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 terminal-window">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-red"></div>
                  <div className="terminal-dot terminal-yellow"></div>
                  <div className="terminal-dot terminal-green"></div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-primary font-mono">Summer Intern @AAI</h3>
                <p className="text-sm text-muted-foreground">
                  Working on innovative projects in the aviation industry, applying AI/ML solutions.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 terminal-window">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-red"></div>
                  <div className="terminal-dot terminal-yellow"></div>
                  <div className="terminal-dot terminal-green"></div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-primary font-mono">Building in Public</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing my development journey, open-source contributions, and learning experiences.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Contact & AI Chat Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? Send me a message or chat with my AI assistant!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <AIChatInterface />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <TerminalWindow title="footer.js">
            <div className="font-mono">
              <p className="text-primary mb-2">
                {">"} Thank you for visiting my portfolio!
              </p>
              <p className="text-muted-foreground mb-4">
                {">"} Let's connect and build something amazing together.
              </p>
              <div className="mb-4">
                <SocialLinks />
              </div>
              <p className="text-xs text-muted-foreground">
                Made with ❤️ by Ravi Panchal © 2025
              </p>
            </div>
          </TerminalWindow>
        </div>
      </footer>
    </div>
  );
};

export default Index;
