import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI mentorship work?",
    answer: "Our AI analyzes your skills, interests, and career goals to provide personalized mentorship guidance. It learns from your progress and adapts its recommendations over time.",
  },
  {
    question: "What kind of assessments are offered?",
    answer: "We offer a variety of assessments including personality tests, skill evaluations, and career aptitude tests. All assessments are AI-powered to help you understand your strengths and growth areas.",
  },
  {
    question: "Can Pathly help with my job applications?",
    answer: "Yes! Pathly can analyze your CV, suggest improvements, and help you align your resume with job descriptions. Our AI can even help you craft compelling cover letters.",
  },
  {
    question: "Is Pathly AI free to use?",
    answer: "We offer both free and premium plans. The free plan includes basic assessments and career guidance, while premium unlocks advanced AI features and unlimited mentorship.",
  },
  {
    question: "How is my data protected?",
    answer: "We use industry-standard encryption and security measures to protect your information. Your data is never shared with third parties and remains completely confidential.",
  },
  {
    question: "Can Pathly help me change my career?",
    answer: "Absolutely! Pathly specializes in career transitions. We analyze your transferable skills and create personalized roadmaps for your new career path with detailed learning resources.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-medium mb-2">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Got Questions?
            </h2>
            <p className="text-muted-foreground">
              Find answers to the most common questions about Pathly.{" "}
              <span className="text-secondary">Can't find what you're looking for?</span>{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Contact our support team
              </span>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-foreground font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
