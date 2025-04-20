import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      skills,
      availability,
      experience,
      motivation,
    } = body;

    if (!name || !email || !phone || !availability || !motivation) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    const newVolunteer = await Volunteer.create({
      name,
      email,
      phone,
      address,
      skills,
      availability,
      experience,
      motivation,
    });

    return NextResponse.json({
      success: true,
      message: "Volunteer registered successfully",
      volunteer: newVolunteer,
    });
  } catch (error) {
    console.error("Create Volunteer Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to register volunteer" },
      { status: 500 }
    );
  }
}
