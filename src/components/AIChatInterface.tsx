import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, MessageCircle, Sparkles } from 'lucide-react';
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
    const lowerMessage = userMessage.toLowerCase();
    
    // Ravi's information responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Ravi is proficient in multiple programming languages including Java, C++, Python, and has strong expertise in Data Structures & Algorithms (DSA) and Competitive Programming (CP). He's also experienced with web development technologies and has solved 376+ coding problems across various platforms.";
    }
    
    if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish')) {
      return "Ravi has achieved significant milestones including the LeetCode 50 Days Badge for 2025, solving 376+ questions across coding platforms, and maintaining 115+ active coding days. He's currently working towards solving 500+ problems and maintaining a 200+ day streak.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return "You can reach Ravi directly at ravi.panchal.kaithi@gmail.com. Feel free to use the contact form on this page to send him a message, and he'll get back to you soon!";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Ravi is currently working on various coding projects and participating in competitive programming. He's building in public and sharing his journey. You can check out his work and connect with him through the social links on this portfolio.";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
      return "Ravi is a Computer Science student with a passion for algorithms and problem-solving. He's actively learning and growing his skills through consistent practice and real-world projects.";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Ravi Panchal. Feel free to ask about his skills, achievements, projects, or how to get in touch with him.";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('what can')) {
      return "I can help you learn about Ravi's programming skills, achievements, projects, and career journey. I can also provide his contact information and guide you on how to reach out to him. What would you like to know?";
    }
    
    if (lowerMessage.includes('leetcode') || lowerMessage.includes('coding platform')) {
      return "Ravi is very active on LeetCode and has earned the 50 Days Badge for 2025. He has solved 376+ problems and maintains consistent practice. He's also active on other coding platforms and participates in competitive programming.";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! Ravi is passionate about coding and problem-solving. Is there something specific about his skills or experience you'd like to know?",
      "Thanks for your question! Ravi would be happy to discuss this with you directly. You can reach out to him using the contact form or email him at ravi.panchal.kaithi@gmail.com.",
      "Great question! Ravi is always learning and growing. His current focus is on algorithms, competitive programming, and building innovative projects. What aspect interests you most?",
      "I'd be happy to help! Ravi's expertise spans multiple programming languages and technologies. Feel free to ask about his specific skills, projects, or achievements."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
          <MessageCircle className="h-5 w-5" />
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
                    {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.text}</p>
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
                    <Bot className="h-4 w-4" />
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
        
        <div className="p-4 border-t border-primary/10">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Ravi's skills, projects, or experience..."
              className="bg-background/50"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage} 
              size="icon"
              variant="terminal"
              disabled={!inputValue.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};