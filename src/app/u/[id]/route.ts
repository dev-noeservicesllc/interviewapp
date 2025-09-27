import { NextResponse } from "next/server";
import { urlStore } from "../../lib/store";

export async function GET(
    _: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const longUrl = urlStore.get(id);

    if (!longUrl) {

        return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
    return NextResponse.redirect(longUrl);
}