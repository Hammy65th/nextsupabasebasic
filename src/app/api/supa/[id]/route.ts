import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

interface Params {
    params:{id:string}
}

const supabase = createClient(
 
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
 
)

// const supabase = createServerComponentClient({cookies})

export const GET = async (req: NextRequest, route: Params) => {

    const id: string = route.params.id;

    const { data, error} = await supabase
        .from('test')
        .select('*')
        .eq('id', id)

    if (error == null) {
        return NextResponse.json({ data })
    }

    return NextResponse.json({ error: error.message })

}