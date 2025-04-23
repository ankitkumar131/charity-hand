"use client";

import { Suspense, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getRandomImage } from "@/lib/unsplash-images";

export default function FAQPage() {
  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      questions: [
        {
          id: 1,
          question: "What is Helping Hand?",
          answer: "Helping Hand is a nonprofit organization dedicated to providing immediate financial relief and sustainable support to individuals and families experiencing urgent financial crises. We connect donors directly with people in need to make a meaningful impact."
        },
        {
          id: 2,
          question: "How does Helping Hand select recipients?",
          answer: "We have a thorough vetting process to identify individuals and families in genuine financial crisis. Our team reviews applications, verifies circumstances, and prioritizes cases based on urgency and need. We strive to ensure that assistance reaches those who need it most."
        },
        {
          id: 3,
          question: "Where does Helping Hand operate?",
          answer: "While our headquarters are in Pune, India, we provide assistance throughout India. We're continuously expanding our reach to help more communities in need."
        }
      ]
    },
    {
      id: "donations",
      name: "Donations",
      questions: [
        {
          id: 4,
          question: "Is my donation tax-deductible?",
          answer: "Yes, Helping Hand is a registered nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes."
        },
        {
          id: 5,
          question: "How much of my donation goes directly to those in need?",
          answer: "We pride ourselves on our efficiency. 85% of all donations go directly to our financial relief programs. The remaining 15% covers essential administrative costs, fundraising, and program development to ensure sustainable impact."
        },
        {
          id: 6,
          question: "Can I specify how my donation is used?",
          answer: "Yes, donors can designate their contributions to specific program areas such as housing assistance, medical bill relief, education support, or our general fund. Please note your preference during the donation process."
        },
        {
          id: 7,
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, UPI payments, bank transfers, and digital wallets. All transactions are processed securely through our payment gateway."
        }
      ]
    },
    {
      id: "volunteering",
      name: "Volunteering",
      questions: [
        {
          id: 8,
          question: "How can I volunteer with Helping Hand?",
          answer: "We offer various volunteering opportunities, from administrative support to event assistance and recipient outreach. Visit our Volunteer page to learn more about current opportunities and submit an application."
        },
        {
          id: 9,
          question: "Is there a minimum time commitment for volunteers?",
          answer: "We welcome volunteers with various availability. While some roles may require a minimum commitment, we also have one-time event opportunities and flexible positions. We'll work with you to find a role that fits your schedule."
        },
        {
          id: 10,
          question: "Can I volunteer remotely?",
          answer: "Yes, we offer remote volunteering opportunities in areas such as social media management, grant writing, and administrative support. These roles allow you to contribute meaningfully from anywhere."
        }
      ]
    },
    {
      id: "programs",
      name: "Our Programs",
      questions: [
        {
          id: 11,
          question: "What types of financial assistance does Helping Hand provide?",
          answer: "We provide emergency assistance for housing (rent/mortgage payments), medical expenses, utility bills, education costs, and essential needs like food and transportation. Our goal is to address immediate crises while connecting recipients with resources for long-term stability."
        },
        {
          id: 12,
          question: "How quickly can someone receive assistance?",
          answer: "Once an application is approved, we typically disburse funds within 48-72 hours for emergency situations. The timeline may vary depending on the specific circumstances and verification requirements."
        },
        {
          id: 13,
          question: "Does Helping Hand offer non-financial support?",
          answer: "Yes, beyond financial assistance, we connect recipients with resources for financial literacy, job placement, affordable housing, healthcare services, and other community support programs to address long-term needs."
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (questionId: number) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter(id => id !== questionId));
    } else {
      setExpandedQuestions([...expandedQuestions, questionId]);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={getRandomImage("faq")}
                alt="Frequently Asked Questions"
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
                  Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl">
                  Find answers to common questions about our organization, donation process, and how we help those in need.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 font-medium text-sm rounded-t-lg ${activeCategory === category.id ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                  {faqCategories
                    .find(category => category.id === activeCategory)?.questions
                    .map((faq) => (
                      <div key={faq.id} className="border rounded-lg overflow-hidden">
                        <button
                          className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
                          onClick={() => toggleQuestion(faq.id)}
                        >
                          <span>{faq.question}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform ${expandedQuestions.includes(faq.id) ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedQuestions.includes(faq.id) && (
                          <div className="p-4 bg-gray-50 border-t">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Still Have Questions?</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                If you couldn't find the answer you were looking for, please don't hesitate to contact us directly.
              </p>
              <Link href="mailto:info@helpinghand.org">
                <Button className="h-10 rounded-md px-8" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Your support can change lives. Join our mission to provide financial relief to those who need it most.
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