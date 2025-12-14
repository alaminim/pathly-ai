'use-client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, FileText, Map, TrendingUp } from "lucide-react";

const functions = [
  {
    icon: Brain,
    title: "Unleash my potential",
    description: "Discover your unique strengths, weaknesses, and unique personality traits. Leverage our AI-powered assessment to find a career path.",
    buttonText: "Take Test Now",
  },
  {
    icon: FileText,
    title: "CV / resume Analysis",
    description: "Elevate career paths. Invite Pathly to analyze your resume, highlighting areas for improvement, and use your skill set to beat ATS.",
    buttonText: "Try it now",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "Develop a well-scheduled, step-by-step career plan, work intelligently, gain skills, get milestones and attain your career goal.",
    buttonText: "See mine",
  },
  {
    icon: TrendingUp,
    title: "Track productivity",
    description: "Monitor your progress, your milestones, and your methodical and use professional growth, helping you stay motivated.",
    buttonText: "Go to my dashboard",
  },
];

export const CoreFunctions = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Core Functions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pathly offers a suite of tools designed to illuminate your career path and accelerate your professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {functions.map((func, index) => (
            <Card
              key={index}
              className="p-6 bg-card-gradient border-border hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <func.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {func.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {func.description}
                </p>
                
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {func.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
