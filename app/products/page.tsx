'use client';
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, FileText, Map, BrainCircuit } from "lucide-react";


const tools = [
  {
    icon: Brain,
    title: "Unleash Your Potential",
    description:
      "Discover your unique strengths and personality traits with our comprehensive AI-powered assessment. Understand what drives you and find careers that align with your true self.",
    buttonText: "Take Test Now",
  },
  {
    icon: FileText,
    title: "CV / Resume Analysis",
    description:
      "Optimize your resume for any job application. Our AI scans your document and provides actionable feedback to beat applicant tracking systems and catch a recruiter's eye.",
    buttonText: "Create Now",
  },
  {
    icon: Map,
    title: "Personalized Roadmap",
    description:
      "Receive a step-by-step career path tailored to your goals and assessment results. Our AI generates a clear roadmap with milestones, learning resources, and mentorship suggestions.",
    buttonText: "Get It Now",
  },
  {
    icon: BrainCircuit,
    title: "Track Productivity",
    description:
      "Monitor your progress against your career roadmap goals. Our dashboard helps you stay on track, celebrate milestones, and adjust your plan as you grow.",
    buttonText: "Go to My Dashboard",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Tools for Career Growth
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-driven tools to help you navigate and accelerate your professional journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="p-8 bg-card-gradient border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <Button className="self-start md:self-center shrink-0">
                    {tool.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Products;
