'use client';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-auto">
          <header className="h-16 border-b border-border bg-card flex items-center px-6">
            <SidebarTrigger />
          </header>

          <div className="p-6 space-y-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}