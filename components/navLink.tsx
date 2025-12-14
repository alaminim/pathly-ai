"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  end?: boolean;
  className?: string;
}

export function NavLink({ href, children, end = false, className }: NavLinkProps) {
  const pathname = usePathname();

  // exact match if end=true, otherwise prefix match
  const isActive = end ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "text-sidebar-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}