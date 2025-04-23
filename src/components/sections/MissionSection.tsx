"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getRandomImage } from "@/lib/unsplash-images";

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              At Helping Hand, we believe that no one should face financial
              hardship alone. Our mission is to provide immediate relief and
              sustainable support to individuals and families experiencing
              urgent financial crises.
            </p>
            <p className="text-lg text-muted-foreground">
              Through the generosity of our donors and the dedication of our
              volunteers, we create a bridge between those who can help and
              those who need it most, fostering a community of compassion and
              support.
            </p>
            <Link href="#about">
              <Button variant="outline">About Our Work</Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={getRandomImage("mission")}
              alt="Smiling children receiving aid"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
