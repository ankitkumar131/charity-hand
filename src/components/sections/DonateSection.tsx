"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Script from "next/script";

declare var Razorpay: any;

export default function DonateSection() {
  const [amount, setAmount] = useState(100);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!name || !mobileNumber || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name, mobileNumber }),
      });
      const data = await res.json();
      if (data.success) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: "Charity Hand",
          description: "Donation",
          order_id: data.order.id,
          callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/update-order`,
          prefill: {
            name,
            contact: mobileNumber,
          },
          theme: {
            color: "#6366F1",
          },
          modal: {
            ondismiss: () => {
              console.log("Payment popup was closed or cancelled");
              window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}?status=cancel`;
            },
          },
        };
        const razorpay = new Razorpay(options);
        razorpay.open();
      } else {
        toast.error("Failed to create order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = name && mobileNumber && amount;

  return (
    <>
      <section id="donate" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Make a Difference Today
              </h2>
              <p className="text-lg">
                Your donation provides immediate relief to individuals and
                families facing financial hardship. Choose a one-time gift or
                become a monthly supporter to create lasting change.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>100% of donations go to those in need</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Tax-deductible contributions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Transparent impact reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <Button
                  onClick={handleDonate}
                  disabled={loading || !isFormValid}
                  className="w-full"
                >
                  {loading ? "Processing..." : "Donate with Razorpay"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
    </>
  );
}
