import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, name, mobileNumber } = body;

    if (!amount || !name || !mobileNumber) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    const options: Razorpay.OrderCreateRequestBody = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name,
        mobileNumber,
      },
    };

    const order = await razorpay.orders.create(options);

    const payment = await Payment.create({
      orderId: order.id,
      paymentId: "",
      amount: amount,
      currency: "INR",
      status: "created",
      name,
      mobileNumber,
    });

    return NextResponse.json({
      success: true,
      order,
      message: "Order created and saved successfully",
    });
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}
