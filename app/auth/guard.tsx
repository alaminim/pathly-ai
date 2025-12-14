import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/lib/supabase/provider";
 // example hook

const { user } = useSupabase();
const router = useRouter();

useEffect(() => {
  if (user) router.replace("/dashboard");
}, [user, router]);