import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export const revalidate = 0;

export async function GET() {
  try {
    const result = await utapi.listFiles({ limit: 500 });
    return NextResponse.json({ resources: result.files });
  } catch (error) {
    console.error("Error fetching from UploadThing:", error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}
