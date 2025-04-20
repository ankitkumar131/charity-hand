"use client";

import Image from "next/image";

export default function DonateSection() {
  return (
    <section id="donate" className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Make a Difference Today
            </h2>
            <p className="text-lg">
              Your donation provides immediate relief to individuals and families
              facing financial hardship. Choose a one-time gift or become a
              monthly supporter to create lasting change.
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
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-6">Ayaan Sayyed</h3>
              <div className="relative w-64 h-64 mb-6 mx-auto">
                <Image
                  src="/assets/images/qr-code.png"
                  alt="UPI QR Code for donations"
                  fill
                  className="object-contain rounded-lg border border-primary/20"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                UPI ID: sayyed.ayaan1612@okhdfc bank
              </p>
              <p className="text-sm text-muted-foreground">
                Scan to pay with any UPI app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
