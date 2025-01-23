import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createServerComponentClient({cookies});

export const POST = async (req: NextRequest) => {

    const data = await req.json();

    const { error } = await supabase
        .from('test')
        .insert({ Name: data.Name, LastName: data.LastName  })

    return NextResponse.json(data)
}