"use client";

import { NavLink } from "@/components/navLink";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Map,
  Target,
  FileText,
  Users,
  Settings,
  LogOut,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Roadmap", url: "/dashboard/roadmap", icon: Map },
  { title: "Goals", url: "/dashboard/goals", icon: Target },
  { title: "CV Analyzer", url: "/dashboard/cv", icon: FileText },
  { title: "Mentors", url: "/dashboard/mentors", icon: Users },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar({ user, onSignOut }: { user?: { email: string }; onSignOut?: () => void }) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const collapsed = state === "collapsed";

  const getUserInitials = () => {
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return "U";
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            {!collapsed && <span className="text-xl font-bold text-sidebar-foreground">Pathly</span>}
          </Link>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "text-center" : ""}>
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      href={item.url}
                      end
                      className="hover:bg-sidebar-accent flex items-center gap-2"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mx-4 mt-auto mb-4 p-4 bg-sidebar-accent rounded-lg">
            <h3 className="font-semibold text-sidebar-foreground mb-2">Upgrade to Pro</h3>
            <p className="text-xs text-sidebar-foreground/80 mb-3">
              Unlock AI-powered insights and get unlimited mentorship.
            </p>
            <Button size="sm" className="w-full">
              Upgrade Plan
            </Button>
          </div>
        )}
      </SidebarContent>

      <SidebarFooter className="bg-sidebar border-t border-sidebar-border">
        {!collapsed && user && (
          <div className="flex items-center gap-3 p-4">
            <Avatar>
              <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">{user.email}</p>
            </div>
            {onSignOut && (
              <Button variant="ghost" size="icon" onClick={onSignOut} className="shrink-0">
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}