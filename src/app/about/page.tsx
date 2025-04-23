import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getRandomImage } from "@/lib/unsplash-images";

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={getRandomImage("about")}
                alt="Helping hands"
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
                  About Helping Hand
                </h1>
                <p className="text-lg md:text-xl">
                  Our mission is to provide immediate financial relief and sustainable support
                  to individuals and families experiencing urgent financial crises.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image 
                    src={getRandomImage("about")} 
                    alt="Our story" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                  <p className="text-gray-700">
                    Helping Hand was founded in 2020 in response to the growing financial hardships faced by communities worldwide. 
                    What began as a small group of volunteers has grown into a global movement of compassionate individuals 
                    dedicated to making a difference in the lives of those facing financial crises.
                  </p>
                  <p className="text-gray-700">
                    We believe that everyone deserves access to financial stability and support during difficult times. 
                    Our organization works tirelessly to connect donors with recipients in need, ensuring that help reaches 
                    those who need it most when they need it most.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Compassion</h3>
                  <p className="text-gray-700">
                    We approach every situation with empathy and understanding, recognizing the dignity of each individual we serve.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Transparency</h3>
                  <p className="text-gray-700">
                    We maintain open and honest communication about our operations, funding, and impact to build trust with our community.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Sustainability</h3>
                  <p className="text-gray-700">
                    We focus on providing both immediate relief and long-term support to create lasting positive change in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <Image 
                        src={getRandomImage("team")} 
                        alt={`Team member ${i}`} 
                        width={160} 
                        height={160} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Team Member {i}</h3>
                    <p className="text-gray-600">Position</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Together, we can make a difference in the lives of those facing financial hardship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#donate">
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