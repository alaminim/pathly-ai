import { Card } from "@/components/ui/card";
import { Clock, MessageSquare, Target, Lock, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your mentor is always online. Get career advice and take quizzes with wherever at anytime, even at nights or PM.",
  },
  {
    icon: MessageSquare,
    title: "Instant Feedback",
    description: "Receive immediate reports and actionable insights from your assessment. No waiting, real user needs.",
  },
  {
    icon: Target,
    title: "Tailored Guidance",
    description: "Our AI understands you. Get personalized career roadmap tailored to your personality, skills, and interests.",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your data is yours. We use secure data encryption service to ensure your information and results remain confidential.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Let the system work for you while you focus on development. Our AI enables the smoother process of work.",
  },
  {
    icon: BarChart3,
    title: "Data- Driven Insights",
    description: "Leverage powerful analytics to learn your strengths and weaknesses, tracking these metrics and make wiser career decisions.",
  },
];

export const Excellence = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Designed For Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a smarter way to plan your future with features built for clarity and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-danger" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
