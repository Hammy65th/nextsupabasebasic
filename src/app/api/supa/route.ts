import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { createServerComponentClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
 
const supabase = createClient(
 
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
 
)
 
// const supabaseServer = createServerComponentClient({ cookies }); //henter auto .env.local
 
export const GET = async (req: NextRequest) => {
 
    const { data, error } = await supabase
    .from("test").select(`id,Name, LastName`)
    .order('id', { ascending: false })
 
    console.log({ data });
 
    return NextResponse.json({ data })
 
}