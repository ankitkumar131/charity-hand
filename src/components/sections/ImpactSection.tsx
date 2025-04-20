"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function ImpactSection() {
  const stats = [
    {
      number: "100+",
      text: "Families Supported",
    },
    {
      number: "₹100,000+",
      text: "Funds Raised",
    },
    {
      number: "1+",
      text: "Years of Service",
    },
    {
      number: "97%",
      text: "Success Rate",
    },
  ];

  return (
    <section id="impact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">
          Our Impact
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.text}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-3xl font-bold">{stat.number}</div>
                <p className="mt-2 text-muted-foreground">{stat.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
