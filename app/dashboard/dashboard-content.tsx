"use client";

import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  CheckCircle2,
  Code,
  FileText,
  Users,
  Lightbulb,
  Briefcase,
  FileCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function DashboardContent({ user }: { user: any }) {
  const firstName =
    user?.user_metadata?.full_name?.split(" ")[0] ||
    user?.email?.split("@")[0] ||
    "there";

  const roadmapItems = [
    { title: "Master Python", status: "completed", icon: CheckCircle2, color: "text-green-500" },
    { title: "Build Portfolio Project", status: "in-progress", icon: Code, color: "text-primary" },
    { title: "Optimize Resume", status: "todo", icon: FileText, color: "text-muted-foreground" },
    { title: "Network with PMs", status: "todo", icon: Users, color: "text-muted-foreground" },
  ];

 

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <header className="h-16 border-b border-border bg-card flex items-center px-6">
            <SidebarTrigger />
          </header>

          <div className="p-6 space-y-6">
          
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Welcome back, {firstName}!
                </h1>
                <p className="text-muted-foreground">
                  Here's a look at your career progress today.
                </p>
              </div>
              <Button>
                <span>Complete Next Step</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
