import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const revalidate = 0; // Disable caching for this route so it's always up to date

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'jvc-farms/',
      max_results: 500,
      resource_type: 'auto',
    });

    return NextResponse.json({ resources: result.resources });
  } catch (error) {
    console.error('Error fetching from Cloudinary:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}
