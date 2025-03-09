import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Ensures the session persists in local storage
    autoRefreshToken: true, // Auto-refresh tokens when they expire
    detectSessionInUrl: true, // Ensures session handling on login callbacks
  },
  cookies: {
    // Add your cookie methods here
  },
});