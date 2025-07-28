import { TerminalWindow } from "@/components/TerminalWindow";
import { SocialLinks } from "@/components/SocialLinks";
import { CodeBlock } from "@/components/CodeBlock";
import { TypingEffect } from "@/components/TypingEffect";
import { ParticleBackground } from "@/components/ParticleBackground";
import { GlitchText } from "@/components/GlitchText";
import { NeonCard } from "@/components/NeonCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar, Coffee, Code, Terminal, Sparkles, Zap, Cpu, Binary } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Index = () => {
  const codeSnippet = `const developer = {
  name: "Ravi Panchal",
  status: "#100DaysOfCode",
  currentRole: "Summer'25 Intern @AAI",
  previousExp: "Ex-Intern @Indian Railways", 
  education: "Btech AI&DS'27 @GSV",
  passion: "Building in Public",
  
  skills: ["AI/ML", "Data Science", "Web Dev"],
  currentlyLearning: ["Advanced Algorithms", "System Design"],
  goals: ["Contribute to Open Source", "Build Impactful Projects"]
};

console.log("Welcome to my portfolio! 🚀");`;

  return (
    <ParticleBackground>
      <div className="min-h-screen text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '-4s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <Badge variant="outline" className="mb-6 text-primary border-primary animate-pulse-neon px-4 py-2">
                <Terminal className="w-4 h-4 mr-2" />
                <span className="font-mono">STATUS: ONLINE</span>
              </Badge>
              
              <h1 className="text-7xl md:text-9xl font-black mb-6 animate-float">
                <GlitchText text="RAVI" className="gradient-text block" />
                <GlitchText text="PANCHAL" className="gradient-text block" />
              </h1>
              
              <div className="text-lg md:text-xl text-muted-foreground font-mono mb-12 leading-relaxed">
                <div className="hologram">
                  <TypingEffect 
                    text="#100DaysOfCode in Progress | Summer'25 Intern @AAI | Ex-Intern @Indian Railways | Btech AI&DS'27 @GSV | Building in Public"
                    speed={30}
                    showCursor={false}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <SocialLinks />
            </div>
            
            <Button variant="cyber" size="lg" className="animate-glow font-mono text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              EXPLORE PORTFOLIO
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 gradient-text">
                <Code className="inline mr-3" />
                ABOUT.EXE
              </h2>
              <p className="text-xl text-muted-foreground font-mono">Initializing developer profile...</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <NeonCard className="order-2 lg:order-1">
                <TerminalWindow title="~/portfolio/about.js">
                  <CodeBlock language="javascript">
                    {codeSnippet}
                  </CodeBlock>
                </TerminalWindow>
              </NeonCard>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h3 className="text-3xl font-bold mb-6 neon-text">
                    <Cpu className="inline mr-3" />
                    SYSTEM_INFO
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Passionate developer with expertise in AI & Data Science. Currently building innovative 
                    solutions at AAI while pursuing B.Tech degree. Committed to open-source development 
                    and sharing knowledge through public building.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <User className="w-5 h-5 text-primary animate-glow" />
                    <span className="font-mono text-sm">AI/DS Student</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary animate-glow" />
                    <span className="font-mono text-sm">India</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <Calendar className="w-5 h-5 text-accent animate-glow" />
                    <span className="font-mono text-sm">Class of 2027</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <Coffee className="w-5 h-5 text-primary animate-glow" />
                    <span className="font-mono text-sm">Coffee.exe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-4 gradient-text">
              <Binary className="inline mr-3" />
              RUNTIME_STATUS
            </h2>
            <p className="text-xl text-muted-foreground font-mono mb-16">Active processes and current operations</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <NeonCard glowColor="primary" className="floating-card">
                <TerminalWindow title="process_1.exe">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse-neon"></div>
                      <h3 className="text-xl font-bold text-primary font-mono">#100DaysOfCode</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Daily coding challenges, algorithm practice, and project development. 
                      Building consistency in software development skills.
                    </p>
                    <div className="mt-4 text-xs font-mono text-primary">
                      STATUS: ACTIVE • UPTIME: 24/7
                    </div>
                  </div>
                </TerminalWindow>
              </NeonCard>
              
              <NeonCard glowColor="secondary" className="floating-card">
                <TerminalWindow title="internship.aai">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-neon"></div>
                      <h3 className="text-xl font-bold text-secondary font-mono">AAI Summer'25</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developing AI/ML solutions for aviation industry. Working on data analysis, 
                      automation, and innovative technological implementations.
                    </p>
                    <div className="mt-4 text-xs font-mono text-secondary">
                      STATUS: IN_PROGRESS • PRIORITY: HIGH
                    </div>
                  </div>
                </TerminalWindow>
              </NeonCard>
              
              <NeonCard glowColor="accent" className="floating-card">
                <TerminalWindow title="public_build.sh">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse-neon"></div>
                      <h3 className="text-xl font-bold text-accent font-mono">Building Public</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Open-source contributions, sharing development journey, and creating 
                      educational content for the developer community.
                    </p>
                    <div className="mt-4 text-xs font-mono text-accent">
                      STATUS: CONTINUOUS • VISIBILITY: PUBLIC
                    </div>
                  </div>
                </TerminalWindow>
              </NeonCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-border/50">
          <div className="max-w-5xl mx-auto text-center">
            <NeonCard>
              <TerminalWindow title="~/contact/footer.js">
                <div className="font-mono space-y-4">
                  <div className="text-primary text-lg">
                    <GlitchText text="> TRANSMISSION_COMPLETE" />
                  </div>
                  <p className="text-muted-foreground">
                    {">"} Ready to collaborate? Let's build the future together.
                  </p>
                  <div className="my-8">
                    <SocialLinks />
                  </div>
                  <div className="pt-6 border-t border-border/30">
                    <p className="text-xs text-muted-foreground">
                      © 2024 Ravi Panchal • Built with React, TypeScript & Tailwind CSS
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {">"} Portfolio v2.0 • Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </TerminalWindow>
            </NeonCard>
          </div>
        </footer>
      </div>
    </ParticleBackground>
  );
};

export default Index;
