import React, { useEffect } from 'react';
import { TerminalWindow } from "@/components/TerminalWindow";
import { SocialLinks } from "@/components/SocialLinks";
import { CodeBlock } from "@/components/CodeBlock";
import { TypingEffect } from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar, Coffee, Code, Terminal, Sparkles, Trophy, Award } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import achievementImage from "@/assets/100-days-achievement.jpg";
import { ContactForm } from "@/components/ContactForm";

import { AIChatInterface } from "@/components/AIChatInterface";
import { GitHubProjects } from "@/components/GitHubProjects";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-background text-foreground" id="top">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-primary border-primary animate-glow text-xs sm:text-sm">
              <Terminal className="w-3 h-3 mr-1" />
              Currently Active
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 neon-text animate-float leading-tight">
              <TypingEffect text="Ravi Panchal" speed={150} />
            </h1>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground font-mono mb-8 px-2 sm:px-4 leading-relaxed">
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
      <section className="py-20 px-4 mt-16">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-2 text-primary font-mono">Building in Public</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing my development journey, open-source contributions, and learning experiences.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 100 Days of Code Achievement Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
              <Trophy className="inline mr-2" />
              100 Days of Code's Achievement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating consistent dedication to coding and continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Achievement Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
                <img 
                  src={achievementImage} 
                  alt="100 Days of Code Achievement" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Achievement Details */}
            <div className="space-y-6">
              <Card className="p-6 terminal-window">
                <div className="terminal-header">
                  <div className="flex gap-2">
                    <div className="terminal-dot terminal-red"></div>
                    <div className="terminal-dot terminal-yellow"></div>
                    <div className="terminal-dot terminal-green"></div>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary font-mono">Milestone Reached</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary">
                        <Terminal className="w-3 h-3 mr-1" />
                        100+ Days
                      </Badge>
                      <span className="text-muted-foreground">Consistent Coding</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary">
                        <Code className="w-3 h-3 mr-1" />
                        Daily Commits
                      </Badge>
                      <span className="text-muted-foreground">GitHub Activity</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary">
                        <Sparkles className="w-3 h-3 mr-1" />
                        LeetCode
                      </Badge>
                      <span className="text-muted-foreground">Problem Solving</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Completed 100+ days of consistent coding practice, focusing on Data Structures & Algorithms, 
                      web development, and building real-world projects. This journey has strengthened my 
                      problem-solving skills and coding discipline.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <GitHubProjects />

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
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <TerminalWindow title="footer.js">
            <div className="font-mono p-2 sm:p-4">
              <p className="text-primary mb-2 text-sm sm:text-base">
                {">"} Thank you for visiting my portfolio!
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
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
