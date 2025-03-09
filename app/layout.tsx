import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User not authenticated:", error);
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}