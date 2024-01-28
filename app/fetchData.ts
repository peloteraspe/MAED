import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function fetchData() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: user, error: userError } = await supabase.auth.getUser();

  const { data: eventsData } = await supabase
    .from('event')
    .select('*')
    .order('id', { ascending: true });

  return {
    user,
    userError,
    eventsData,
  };
}
