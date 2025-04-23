"use client";

import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "September 15, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hyatt, Mumbai",
      description: "Join us for an elegant evening of dinner, entertainment, and fundraising. All proceeds will support our emergency financial relief programs.",
      image: "/assets/images/11.png"
    },
    {
      id: 2,
      title: "Community Fundraising Walk",
      date: "October 8, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Cubbon Park, Bangalore",
      description: "Walk with us to raise awareness and funds for families facing financial hardship. Registration includes t-shirt and refreshments.",
      image: "/assets/images/11.png"
    },
    {
      id: 3,
      title: "Financial Literacy Workshop",
      date: "November 12, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center, Pune",
      description: "Free workshop offering practical advice on budgeting, saving, and financial planning for families. Lunch will be provided.",
      image: "/assets/images/11.png"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Donor Appreciation Night",
      date: "July 20, 2025",
      location: "Taj Hotel, Delhi",
      description: "A special evening to thank our generous donors and share the impact of their contributions over the past year.",
      image: "/assets/images/11.png"
    },
    {
      id: 5,
      title: "Summer Fundraising Concert",
      date: "June 5, 2025",
      location: "City Amphitheater, Chennai",
      description: "A night of music and entertainment featuring local artists, raising funds for our education support programs.",
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
                alt="Charity events"
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
                  Events & Fundraisers
                </h1>
                <p className="text-lg md:text-xl">
                  Join us at our upcoming events to support our mission and connect with our community.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <div className="space-y-2">
                        <p className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </p>
                        <p className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </p>
                        <p className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </p>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                      <Button className="w-full">Register Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Past Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-1/3">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <p className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                      <p className="text-gray-700">{event.description}</p>
                      <Link href="#">
                        <Button variant="outline">View Gallery</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Host Your Own Fundraiser</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Interested in organizing a fundraising event for Helping Hand? We provide resources and support to make your event a success.
              </p>
              <Link href="mailto:events@helpinghand.org">
                <Button 
                  className="h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90"
                  size="lg"
                >
                  Contact Our Events Team
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}