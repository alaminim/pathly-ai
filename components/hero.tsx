'use client';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/Mentorship.png')" }}
>
  <div className="absolute inset-0 bg-linear-to-br from-background/95 to-background/65" />
</div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your career is no longer at stake, Explore the core of yourself with pathly
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-secondary" />
            <p className="text-sm md:text-base">
              Powered by AI, get easy access to tools, analyze assessments and personalized insights
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Try it now
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Read our policy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
