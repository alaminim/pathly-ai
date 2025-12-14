import { Excellence } from "@/components/benefit";
import { FAQ } from "@/components/faqs";
import { CoreFunctions } from "@/components/features";
import { Hero } from "@/components/hero";
import { Potential } from "@/components/potential";


export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="min-h-screen bg-background">
      <main className="pt-16">
        <Hero />
        <CoreFunctions />
        <Excellence />
        <Potential />
        <FAQ />
      </main>
    </div>
  );
}