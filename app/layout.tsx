import { Poppins } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import Navbar from '@/components/Navbar';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
  display: 'swap',
});

const poppinsBold = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins-bold',
  weight: '700',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Peloteras',
  description: 'Donde las mujeres jugamos fútbol',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en" className={`${poppins.variable} ${poppinsBold.variable}`}>
      <body>
        <Navbar user={user} />
        {children}
      </body>
      {/* <Toaster /> */}
    </html>
  );
}
