import Sidebar from '@/components/organisms/Sidebar';
import { Events } from '@/components/pages/events';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const supabase = createClient();

  const { data: eventsData } = await supabase
    .from('event')
    .select('*')
    .order('id', { ascending: true });

  return (
    <>
      <main className="pl-32 mt-8">
        <Sidebar
          navList={[
            {
              id: 1,
              title: 'Home',
              path: '/',
              icon: 'assets/icons/Home.svg',
            },
          ]}
        />
        <Events events={eventsData} />
      </main>
    </>
  );
}
