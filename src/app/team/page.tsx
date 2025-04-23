"use client";

import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Executive Director",
      bio: "Sarah has over 15 years of experience in nonprofit management and is passionate about creating sustainable solutions to financial hardship.",
      image: "/assets/images/11.png"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      bio: "Michael oversees our day-to-day operations and ensures that our programs run efficiently to maximize our impact.",
      image: "/assets/images/11.png"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Financial Aid Coordinator",
      bio: "Priya works directly with recipients to assess needs and coordinate financial assistance in the most effective way possible.",
      image: "/assets/images/11.png"
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Volunteer Coordinator",
      bio: "James manages our growing network of volunteers and creates meaningful opportunities for community involvement.",
      image: "/assets/images/11.png"
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      position: "Outreach Specialist",
      bio: "Aisha develops partnerships with community organizations to extend our reach and identify those most in need of assistance.",
      image: "/assets/images/11.png"
    },
    {
      id: 6,
      name: "Robert Garcia",
      position: "Development Director",
      bio: "Robert leads our fundraising initiatives and donor relations to ensure sustainable funding for our programs.",
      image: "/assets/images/11.png"
    }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/11.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Hero Content */}
            <div className="container relative z-10 py-24 md:py-32">
              <div className="max-w-3xl space-y-6 text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Our Team
                </h1>
                <p className="text-lg md:text-xl">
                  Meet the dedicated professionals working tirelessly to make a difference in the lives of those facing financial hardship.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.slice(0, 3).map((member) => (
                  <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={160} 
                        height={160} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Program Staff</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.slice(3).map((member) => (
                  <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={160} 
                        height={160} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                We're always looking for passionate individuals to help us expand our impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/volunteer">
                  <Button 
                    variant="outline"
                    className="h-10 rounded-md px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
                    size="lg"
                  >
                    Volunteer With Us
                  </Button>
                </Link>
                <Link href="mailto:careers@helpinghand.org">
                  <Button
                    className="h-10 rounded-md px-8"
                    size="lg"
                  >
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}