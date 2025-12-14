import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export  function createClient() {
  // `cookies()` can be async depending on Next version/runtime
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // Provide a small wrapper that matches the shape Supabase expects
      cookies: {
        get(name: string) {
          try {
            return (cookieStore as any).get?.(name)?.value;
          } catch {
            return undefined;
          }
        },
        set(name: string, value: string, options?: any) {
          try {
            // runtime cookie API may differ; call set if available
            if (typeof (cookieStore as any).set === "function") {
              // some runtimes accept an object, others accept (name, value, options)
              const setFn = (cookieStore as any).set;
              if (setFn.length === 1) {
                // likely set({ name, value, options })
                setFn({ name, value, options });
              } else {
                setFn(name, value, options);
              }
            }
          } catch {}
        },
        remove(name: string, options?: any) {
          try {
            if (typeof (cookieStore as any).delete === "function") {
              (cookieStore as any).delete(name);
            } else if (typeof (cookieStore as any).remove === "function") {
              (cookieStore as any).remove(name);
            }
          } catch {}
        },
      },
    }
  );
}
