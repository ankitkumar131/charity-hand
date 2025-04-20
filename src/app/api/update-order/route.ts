import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Payment from "@/models/Payment";
import crypto from "crypto";

export const dynamic = "force-dynamic";

async function parseFormBody(req: Request) {
  const formData = await req.text();
  const params = new URLSearchParams(formData);
  return Object.fromEntries(params);
}

export async function POST(req: Request) {
  try {
    const body = await parseFormBody(req);
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Missing required parameters" },
        { status: 400 }
      );
    }

    await dbConnect();

    const payment = await Payment.findOne({ orderId: razorpay_order_id });

    if (!payment) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      //   return NextResponse.json(
      //     { success: false, message: "Signature verification failed" },
      //     { status: 400 }
      //   );
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}?status=failed`
      );
    }

    payment.paymentId = razorpay_payment_id;
    payment.signature = razorpay_signature;
    payment.status = "paid";
    await payment.save();

    // return NextResponse.json({
    //   success: true,
    //   message: "Payment successfully verified and updated",
    //   payment,
    // });

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}?status=success`
    );
  } catch (error) {
    console.error("Error updating payment:", error);
    // return NextResponse.json(
    //   { success: false, message: "Failed to update payment" },
    //   { status: 500 }
    // );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}?status=failed`
    );
  }
}
