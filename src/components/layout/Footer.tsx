"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Helping Hand</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Providing financial relief and support to those in need since 2025.
            </p>
            <div className="flex gap-4">
              <a
                className="text-muted-foreground hover:text-primary"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                className="text-muted-foreground hover:text-primary"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                className="text-muted-foreground hover:text-primary"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href="/programs"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href="/success-stories"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href="/get-involved"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Lane no 6</p>
              <p>Aple ghar society</p>
              <p>Kharadi, Pune</p>
              <p className="mt-2">info@helpinghand.org</p>
              <p>(+91) 73859 25527</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on our impact and upcoming
              events.
            </p>
            <div>
              <form className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email address"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Helping Hand Charity. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a className="hover:text-primary" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="/terms-of-service">
              Terms of Service
            </a>
            <a className="hover:text-primary" href="/accessibility">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
