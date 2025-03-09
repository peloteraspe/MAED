import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value,
          domain: ".peloteras.com", // 🔹 Make it accessible from all subdomains
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "Lax",
          ...options,
        });
        response.cookies.set({
          name,
          value,
          domain: ".peloteras.com",
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "Lax",
          ...options,
        });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value: "",
          domain: ".peloteras.com",
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "Lax",
          expires: new Date(0),
          ...options,
        });
        response.cookies.set({
          name,
          value: "",
          domain: ".peloteras.com",
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "Lax",
          expires: new Date(0),
          ...options,
        });
      },
    },
  });

  // 🔹 Redirect to login if the user is not authenticated
  const { data } = await supabase.auth.getUser();
  if (!data?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: "/((?!login|_next|public|api).*)",
};