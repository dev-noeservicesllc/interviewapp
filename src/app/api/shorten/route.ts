
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { urlStore } from "../../lib/store";

export async function POST(req: Request) {
    const { url } = await req.json();

    if (typeof url !== "string" || !/^https?:\/\//i.test(url)) {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const id = nanoid(6);
    urlStore.set(id, url);
    return Response.json({ id });

}