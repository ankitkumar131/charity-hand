"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentStatusPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const status = searchParams.get("status");

  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Go Home");
  const [buttonLink, setButtonLink] = useState("/");

  useEffect(() => {
    if (status === "success") {
      setMessage("🎉 Payment Successful! Thank you for your donation.");
      setButtonText("Go to Dashboard");
      setButtonLink("/");
    } else if (status === "failed") {
      setMessage("❌ Payment Failed. Please try again.");
      setButtonText("Retry Payment");
      setButtonLink("/#donate");
    } else if (status === "inprogress") {
      setMessage("⏳ Your payment is still processing...");
      setButtonText("Refresh");
      setButtonLink(`/?status=inprogress`);
    } else if (status === "cancel") {
      setMessage(" Payment Canceled");
      setButtonLink(`/`);
    } else {
      setMessage("🤔 Invalid payment status.");
    }
  }, [status]);

  return (
    <section className="py-16 text-center bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold">{message}</h2>
        <div className="mt-6">
          <Button onClick={() => router.push(buttonLink)}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
