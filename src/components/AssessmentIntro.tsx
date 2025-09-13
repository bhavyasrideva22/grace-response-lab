import { Brain, Heart, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  const dimensions = [
    {
      icon: Brain,
      title: "Self-Awareness",
      description: "Understanding your emotional patterns and triggers"
    },
    {
      icon: Heart,
      title: "Self-Regulation", 
      description: "Managing emotions and staying calm under pressure"
    },
    {
      icon: Users,
      title: "Empathy",
      description: "Connecting with and understanding others' feelings"
    },
    {
      icon: Target,
      title: "Social Skills",
      description: "Building relationships and navigating social dynamics"
    },
    {
      icon: Lightbulb,
      title: "Motivation",
      description: "Driving positive change and inspiring others"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-soft to-primary-soft">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 assessment-hero rounded-2xl shadow-lg">
              <Brain className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Feedback Response Grace
            </h1>
          </div>
          
          <p className="text-2xl text-muted-dark mb-4 max-w-3xl mx-auto leading-relaxed">
            A Deep Dive into Your Emotional Intelligence & Relational Agility
          </p>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Emotional Intelligence (EQ) shapes how we handle feedback, navigate relationships, and manage stress — at school, work, and in everyday life. Understanding your EQ helps you improve communication, stay calm under pressure, and build deeper connections.
          </p>
        </div>

        {/* What You'll Discover */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-muted-dark">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dimensions.map((dimension, index) => (
              <Card 
                key={dimension.title}
                className="card-elevated border-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary-soft rounded-2xl">
                    <dimension.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-muted-dark">
                    {dimension.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {dimension.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment Details */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-elevated border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center text-muted-dark">
                Your Assessment Journey
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Complete Assessment</h3>
                  <p className="text-muted-foreground">12 thoughtful questions across multiple formats</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Your Profile</h3>
                  <p className="text-muted-foreground">Personalized EQ profile with strengths & growth areas</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Build Your Plan</h3>
                  <p className="text-muted-foreground">Customized growth plan with actionable strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to explore your emotional intelligence and discover new ways to grow? This assessment will help you uncover your natural strengths and provide personalized strategies for developing deeper self-awareness and stronger relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button 
                variant="hero"
                size="lg"
                onClick={onStartAssessment}
                className="px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-gentle-bounce"
              >
                Begin Your EQ Journey
              </Button>
              
              <div className="text-sm text-muted-foreground">
                ⏱️ Takes 8-12 minutes
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            By proceeding, you'll receive personalized insights to enhance your emotional intelligence and relational skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;