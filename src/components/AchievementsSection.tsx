import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Code, Calendar, Award } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "LeetCode 50 Days Badge 2025",
      description: "Solving problems 50+ days in 2025",
      icon: <Trophy className="h-6 w-6" />,
      badge: "50 Days",
      color: "from-green-500 to-emerald-600",
      stats: "Consistent problem solving streak"
    },
    {
      title: "376 Questions Solved",
      description: "Total problems solved across platforms",
      icon: <Code className="h-6 w-6" />,
      badge: "376 Solved",
      color: "from-blue-500 to-cyan-600",
      stats: "Strong algorithmic foundation"
    },
    {
      title: "115 Active Days",
      description: "Active coding and learning days",
      icon: <Calendar className="h-6 w-6" />,
      badge: "115 Days",
      color: "from-purple-500 to-violet-600",
      stats: "Dedicated learning journey"
    },
    {
      title: "Multi-Language Proficiency",
      description: "Expertise in Java, C++, Python, DSA, CP",
      icon: <Award className="h-6 w-6" />,
      badge: "5+ Languages",
      color: "from-orange-500 to-red-600",
      stats: "Versatile programming skills"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            🏆 Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my coding journey, milestones, and continuous learning progress
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-mono">
                    {achievement.badge}
                  </Badge>
                </div>
                <div className="mt-3 pt-3 border-t border-primary/10">
                  <p className="text-xs text-muted-foreground">
                    {achievement.stats}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Current Goal</h3>
              </div>
              <p className="text-muted-foreground">
                Working towards solving <span className="text-primary font-semibold">500+ problems</span> and maintaining a <span className="text-primary font-semibold">200+ day streak</span> in 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};