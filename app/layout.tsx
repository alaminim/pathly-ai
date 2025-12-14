'use client';
import { Toaster as Sonner, Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SWRConfig } from "swr";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {SupabaseProvider} from "@/lib/supabase/provider";


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
            revalidateOnFocus: true,
            dedupingInterval: 2000,
          }}
        >
          <TooltipProvider>
           <SupabaseProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
              <Sonner />
              </SupabaseProvider>
          </TooltipProvider>
        </SWRConfig>
      </body>
    </html>
  );
}