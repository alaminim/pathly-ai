"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import Image from "next/image";
import SideImg from "./../assets/ideas.jpg";
import { GalleryVerticalEnd, BrainCircuit } from "lucide-react";
import { signInAction, signUpAction } from "./actions";

// Zod schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  password: z.string().min(8, "Password must be at least 8 characters"),
  error: z.string().optional(),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2, "Name too short").max(100),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Outer wrapper with Suspense
export default function Auth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}

// Inner component that uses useSearchParams
function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const schema = mode === "signup" ? signupSchema : loginSchema;
    const result = schema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      // Zod exposes validation issues as `error.issues`
      const issues = result.error?.issues ?? [];
      issues.forEach((err: any) => {
        const key = err?.path?.[0];
        if (key) fieldErrors[String(key)] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      if (mode === "signup") {
        await signUpAction(formData);
        toast.success("Account created successfully!");
      } else {
        await signInAction(formData);
        toast.success("Logged in successfully!");
      }
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <BrainCircuit className="size-4" />
            Pathly.ai
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <label htmlFor="fullName">Full Name</label>
                  <input id="fullName" name="fullName" type="text" />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {mode === "signup" && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input id="confirmPassword" name="confirmPassword" type="password" />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded"
              >
                {mode === "signup" ? "Sign Up" : "Log In"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={SideImg}
          alt="Image"
          width={200}
          height={200}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}