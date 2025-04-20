import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const query = status ? { status } : {};

    const payments = await Payment.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, payments });
  } catch (error) {
    console.error("Get Payments Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}
