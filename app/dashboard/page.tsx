import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import DashboardContent from "./dashboard-content";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // redirect unauthenticated users to /auth
    redirect("/auth");
  }

  return <DashboardContent user={user} />;
}