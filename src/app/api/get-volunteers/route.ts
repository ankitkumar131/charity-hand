import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();

    const volunteers = await Volunteer.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      volunteers,
    });
  } catch (error) {
    console.error("Get Volunteers Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch volunteers" },
      { status: 500 }
    );
  }
}
