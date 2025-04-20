"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HelpSection() {
  return (
    <section id="help" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 sm:text-4xl">
          Ways to Help
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Join our mission to support those in need. Every contribution makes a
          difference.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 pt-6">
              <h3 className="text-xl font-bold mb-2">Make a Donation</h3>
              <p className="text-muted-foreground mb-4">
                Your financial contribution provides immediate relief to families
                in crisis. Choose a one-time or recurring donation.
              </p>
              <Link href="#donate">
                <Button className="w-full">Donate Now</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 pt-6">
              <h3 className="text-xl font-bold mb-2">Volunteer With Us</h3>
              <p className="text-muted-foreground mb-4">
                Share your time and skills to help families in need. We have
                various volunteer opportunities available.
              </p>
              <Link href="#volunteer">
                <Button variant="outline" className="w-full">
                  Become a Volunteer
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 pt-6">
              <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
              <p className="text-muted-foreground mb-4">
                Help us reach more people by sharing our mission with your
                friends, family, and social networks.
              </p>
              <Link href="#share">
                <Button variant="outline" className="w-full">
                  Share Our Story
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
