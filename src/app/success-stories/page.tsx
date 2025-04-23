"use client";

import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      title: "From Eviction to Stability",
      name: "Maria S.",
      location: "Pune, Maharashtra",
      story: "After losing my job due to company downsizing, I fell behind on rent and was facing eviction with my two children. Helping Hand provided emergency rental assistance that kept us in our home while I searched for new employment. Three months later, I secured a new position and am now financially stable again. The support came at the most critical time in our lives.",
      image: "/assets/images/11.png"
    },
    {
      id: 2,
      title: "Medical Crisis Averted",
      name: "Rajesh K.",
      location: "Mumbai, Maharashtra",
      story: "When my daughter needed emergency surgery, our insurance didn't cover the full cost. The medical bills were overwhelming, and we were considering taking out high-interest loans. Helping Hand stepped in with financial assistance that covered the remaining hospital costs. Today, my daughter is healthy, and we're not burdened with crushing debt.",
      image: "/assets/images/11.png"
    },
    {
      id: 3,
      title: "A Second Chance at Education",
      name: "Priya T.",
      location: "Bangalore, Karnataka",
      story: "After my parents lost their business during the pandemic, I thought I would have to drop out of university. Helping Hand provided an emergency education grant that allowed me to continue my studies. I've now graduated with a degree in computer science and secured a job that helps support my family.",
      image: "/assets/images/11.png"
    },
    {
      id: 4,
      title: "Rebuilding After Disaster",
      name: "Amit and Sunita P.",
      location: "Chennai, Tamil Nadu",
      story: "When floods destroyed our home and belongings, we were left with nothing. Helping Hand provided immediate financial relief for temporary housing and essential items. They also connected us with resources for long-term recovery. Six months later, we've been able to repair our home and return to normal life.",
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
                alt="Success stories"
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
                  Success Stories
                </h1>
                <p className="text-lg md:text-xl">
                  Real stories from real people whose lives have been changed through the support of our donors and volunteers.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Lives Changed Through Your Support</h2>
                <p className="text-lg text-gray-700">
                  Every donation makes a difference. Here are just a few of the many lives that have been transformed through the generosity of our community.
                </p>
              </div>
              
              <div className="space-y-16">
                {stories.map((story, index) => (
                  <div key={story.id} className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[2fr_3fr]' : 'md:grid-cols-[3fr_2fr] md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={story.image} 
                        alt={story.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
                      <p className="text-primary font-medium">{story.name} • {story.location}</p>
                      <p className="text-gray-700">"{story.story}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Share Your Story</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Have you received assistance from Helping Hand? We'd love to hear how our support has impacted your life.
              </p>
              <Link href="mailto:stories@helpinghand.org">
                <Button className="h-10 rounded-md px-8" size="lg">
                  Submit Your Story
                </Button>
              </Link>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Help Write the Next Success Story</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Your contribution can change someone's life. Join us in making a difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#donate">
                  <Button 
                    className="h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90"
                    size="lg"
                  >
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
                <Link href="/volunteer">
                  <Button
                    variant="outline"
                    className="h-10 rounded-md px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
                    size="lg"
                  >
                    Volunteer
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