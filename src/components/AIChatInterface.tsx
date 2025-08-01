import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, MessageCircle, Sparkles, Code2, Instagram, Linkedin, Terminal, FileCode, Network } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const AIChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm an AI assistant here to help you learn about Ravi Panchal and answer any questions you might have about his work, skills, or projects. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const socialLinks = "\n\n🔗 Know me more:\n📷 Instagram: https://www.instagram.com/ravixpanchal/\n💼 LinkedIn: https://www.linkedin.com/in/ravixpanchal/";
    
    let response = "";
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('namaste')) {
      response = "Hello! I'm Ravi's AI assistant. I can tell you everything about Ravi Panchal - his education, achievements, interests, and how to connect with him. What would you like to know?";
    }
    
    // Basic Information
    else if (message.includes('who is ravi') || message.includes('about ravi') || message.includes('tell me about') || message.includes('intro')) {
      response = "Ravi Panchal is from Village Kaithi, Orai (Uttar Pradesh). He's currently pursuing B.Tech in Artificial Intelligence and Data Science at Gati Shakti Vishwavidyalaya (GSV), Vadodara. He's passionate about DSA, Machine Learning, and building innovative tech solutions.";
    }
    
    // Education
    else if (message.includes('education') || message.includes('college') || message.includes('study') || message.includes('school') || message.includes('tell me educational background')) {
      response = "Ravi completed 10th and 12th from S.R. Inter College, Orai, consistently ranking in top 3. He scored 92 percentile in JEE Mains after a dedicated drop year. Currently pursuing B.Tech in AI & Data Science at GSV Vadodara.";
    }
    
    // Skills and Interests
    else if (message.includes('skills') || message.includes('technology') || message.includes('current status') || message.includes('interests') || message.includes('tell me skills')) {
      response = "Ravi is passionate about solving DSA problems, Machine Learning, and exploring cutting-edge technologies. He also loves watching cricket! He's focused on building efficient and impactful tech products.";
    }
    
    // Achievements and Coding
    else if (message.includes('achievement') || message.includes('tell me about internships') || message.includes('leetcode') || message.includes('coding') || message.includes('100days') || message.includes('internship')) {
      response = "Ravi is currently participating in #100DaysOfCode challenge on LeetCode and recently earned the 50 Days Badge! He achieved 1st Rank on GeeksforGeeks institutional leaderboard. He's building a strong coding profile across multiple platforms.";
    }
    
    // Internships
    else if (message.includes('internship') || message.includes('experience') || message.includes('work experience') || message.includes('railways') || message.includes('airport')) {
      response = "Ravi has completed two significant internships:\n\n🚂 Indian Railways - DRM Jhansi (May-June 2024): Learned DRM office operations, maintenance systems, and CRIS (Centre for Railway Information Systems). Gained practical Excel data management skills.\n\n✈️ Airports Authority of India - LBS International Airport, Varanasi (4 weeks): Understood airport operations, security protocols, and Digi Yatra (facial recognition check-in). Developed a Server Tracker Website project.";
    }
    
    // Friends and Personal Life
    else if (message.includes('friends') || message.includes('personal') || message.includes('relationship') || message.includes('college life')) {
      response = "At GSV, Ravi's best friends are Abhinav Kesharwani, Rishav Kumar, Anurag Jaiswal, Prabhat, and Pratyush. His sisters at GSV are Komal Pathak, Shreya Pathak, and Shruti Verma. He has loving seniors like Soham Vani Bhaiya, Shri Krishna Pandey Bhaiya, Ayush Bhaiya, and Soubhagya Bhaiya. He's currently not in a relationship.";
    }
    
    // Contact and Social Links
    else if (message.includes('contact') || message.includes('reach') || message.includes('connect') || message.includes('social') || message.includes('instagram') || message.includes('linkedin')) {
      response = "You can connect with Ravi on multiple platforms: Instagram (@ravixpanchal), LinkedIn (/ravixpanchal), GitHub, LeetCode, HackerRank, GeeksforGeeks, CodeChef, and many more! His email is ravi.panchal.kaithi@gmail.com. Check his Linktree for all links: linktr.ee/ravi.panchal";
    }
    
    // Hometown
    else if (message.includes('hometown') || message.includes('village') || message.includes('orai') || message.includes('kaithi') || message.includes('address') || message.includes('tell me about where you live')) {
      response = "Ravi is from Village Kaithi, Orai in Uttar Pradesh. It's his hometown where he completed his schooling before moving to Vadodara for his B.Tech.";
    }
    
    // Projects and Work
    else if (message.includes('projects') || message.includes('work') || message.includes('portfolio') || message.includes('github')) {
      response = "Ravi is actively building projects and participating in coding challenges. You can check out his work on GitHub (github.com/ravixpanchal) and see his progress on various coding platforms like LeetCode and GeeksforGeeks.";
    }
    
    // Default response
    else {
      response = "That's a great question! I can tell you about Ravi's education, achievements, coding journey, internships, friends at college, social media profiles, or anything else you'd like to know. Feel free to ask about his hometown, interests, or how to connect with him!";
    }
    
    return response + "\n\n🔗 Connect with me:";  // Social icons will be added in the component
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-96">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Code2 className="h-5 w-5" />
          Chat with AI Assistant
          <Sparkles className="h-4 w-4 text-yellow-500" />
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Ask me anything about Ravi's skills, projects, or experience!
        </p>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-80">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {message.sender === 'user' ? <User className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
                  </div>
                   <div className={`p-3 rounded-lg ${
                     message.sender === 'user'
                       ? 'bg-primary text-primary-foreground'
                       : 'bg-muted'
                   }`}>
                      <div className="text-sm whitespace-pre-line">
                        {message.text.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
                          if (part.match(/https?:\/\/[^\s]+/)) {
                            return (
                              <a
                                key={index}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline break-all"
                              >
                                {part}
                              </a>
                            );
                          }
                          return part;
                        })}
                        {message.sender === 'ai' && (
                          <div className="flex gap-2 mt-2">
                            <a
                              href="https://www.instagram.com/ravixpanchal/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition-transform"
                            >
                              <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/ravixpanchal/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded bg-blue-600 hover:scale-110 transition-transform"
                            >
                              <Linkedin className="w-4 h-4 text-white" />
                            </a>
                          </div>
                        )}
                      </div>
                     <span className="text-xs opacity-70 mt-1 block">
                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                     </span>
                   </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>
        
        <div className="p-3 sm:p-4 border-t border-primary/10">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Ravi's skills, projects..."
              className="bg-background/50 text-xs sm:text-sm"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage} 
              size="icon"
              variant="terminal"
              disabled={!inputValue.trim() || isLoading}
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <Send className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
