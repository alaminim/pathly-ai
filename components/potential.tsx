import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import laptopImage from "./../app/assets/laptop-work.jpg";
import Link from "next/link";

const benefits = [
  "Optimise career purely alignment computers",
  "Identify tools for diverse or future success",
  "Gain confidence in your intelligent outcomes",
];

export const Potential = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Unlock Your True Potential
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Pathly goes beyond simple quizzes. We analyze hundreds of data points to create a holistic view of your professional persona, helping you feel seen, treasured, and platforms where you are
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/dashboard">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Start Your Journey
              </Button>
            </Link>
          </div>

          <div className="relative">
            <Image
              src={laptopImage}
              alt="Professional working on career development"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
