"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
      isScrolled ? "shadow-sm" : ""
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Helping Hand</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:text-primary" href="#mission">
            Our Mission
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#impact">
            Impact
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#help">
            Ways to Help
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#donate" className="hidden md:inline-flex">
            <Button>Donate Now</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background/95 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              className="text-sm font-medium hover:text-primary py-2"
              href="#mission"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Mission
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary py-2"
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary py-2"
              href="#help"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ways to Help
            </Link>
            <Link
              href="#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2"
            >
              <Button className="w-full">Donate Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
