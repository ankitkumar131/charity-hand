"use client";

import { useSearchParams } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ImpactSection from "@/components/sections/ImpactSection";
import HelpSection from "@/components/sections/HelpSection";
import DonateSection from "@/components/sections/DonateSection";
import PaymentStatusPage from "./payment-status";

export default function Home() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return status ? (
    <PaymentStatusPage status={status} />
  ) : (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <HelpSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
