import { NextResponse } from "next/server";
import { uploadBlogCover } from "@/lib/storage/r2";

export async function GET() {
  try {
    const buffer = Buffer.from("Jiahua Meal R2 Test");

    const result = await uploadBlogCover(
      buffer,
      "txt"
    );

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}