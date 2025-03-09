import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({
            name,
            value,
            domain: ".peloteras.com", // 🔹 Ensures cookie is accessible from all subdomains
            path: "/",
            secure: true, // 🔒 Ensure HTTPS is used
            httpOnly: true, // 🚫 Prevent client-side JS access for security
            sameSite: "Lax", // 🛡 Prevent CSRF attacks
            ...options,
          });
        } catch (error) {
          console.warn("Supabase cookie set error:", error);
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({
            name,
            value: "",
            domain: ".peloteras.com", // 🔹 Must match the set cookie domain
            path: "/",
            secure: true,
            httpOnly: true,
            sameSite: "Lax",
            expires: new Date(0), // ⏳ Expire the cookie
            ...options,
          });
        } catch (error) {
          console.warn("Supabase cookie remove error:", error);
        }
      },
    },
  });
}