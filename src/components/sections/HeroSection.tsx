"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/helpingHand.jpg"
          alt="Helping hands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Extend a Helping Hand – Change Lives Today
          </h1>
          <p className="text-lg md:text-xl">
            We connect donors with people in critical financial situations,
            providing immediate relief and long-term support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#donate">
              <Button className="h-10 rounded-md px-8" size="lg">
                Donate Now
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </Button>
            </Link>
            <Link href="#learn-more">
              <Button
                variant="outline"
                className="h-10 rounded-md px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
