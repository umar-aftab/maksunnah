import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  // Logic from your previous code for article of the day:
  const FIRST_ID = 116;
  const totalArticles = 1015;
  const daysSinceStart = Math.floor(
    (new Date() - new Date('2025-07-04')) / (1000 * 60 * 60 * 24)
  );
  const targetId = FIRST_ID + (daysSinceStart % totalArticles);

  const { data, error } = await supabase
    .from('Articles')
    .select('*')
    .eq('id', targetId)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: true, message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(data, { status: 200 });
}
