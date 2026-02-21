"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const checkScroll = () => setAtTop(window.scrollY < SCROLL_THRESHOLD);
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-[padding,background-color] duration-300 ease-out ${
        atTop ? "bg-background" : "bg-surfaces/70"
      }`}
    >
      <div
        className={`container mx-auto px-6 transition-all duration-300 ease-out ${
          atTop ? "py-5" : "py-4"
        }`}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`hidden md:inline font-bold text-deep-space-blue hover:text-blue-green transition-all duration-300 ease-out ${
                atTop ? "text-2xl" : "text-xl"
              }`}
            >
              Interactive Mechanics
            </Link>
            <Link
              href="/"
              className="logo-link md:absolute md:left-1/2 md:-translate-x-1/2 block"
              aria-label="Interactive Mechanics home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className={`transition-all duration-300 ease-out ${
                  atTop ? "w-12.5 h-12.5" : "w-10 h-10"
                }`}
                aria-hidden
              >
                <defs>
                  <style>
                    {`.logo-st0{fill:#fff}.logo-st1{fill:#2d3142}`}
                  </style>
                </defs>
                <g>
                  <path
                    className="logo-st1"
                    d="M70.74,83.39h-14.31l-.19-.12c-.34-.2-.79-.56-1.34-.99-2.45-1.92-7.02-5.49-12.99-5.49s-10.54,3.57-13,5.49c-.56.43-1.01.79-1.34.99l-.19.12h-14.66v-6.78l.71-.04c.53-.03,13.08-.95,13.08-14.25,0-6.14-1.48-10.64-4.39-13.35-3.12-2.92-6.82-2.7-6.86-2.7H4.8v-6.66h65.9v2.81h25.11l-.07.82c-.04.39-1.18,9.58-29.6,17.13-5.08,1.59-5.07,7.64-5.07,7.69,0,.1-.2,3.52,2.04,5.92,1.52,1.63,3.82,2.45,6.85,2.45h.75v6.96h.03Z"
                  />
                  <path
                    className="logo-st0"
                    d="M56.33,84.71c-.07-.16-6.55-16.09-14.35-16.1-7.79-.01-14.32,15.9-14.39,16.06l-1.37-.91c.28-.69,7.03-17.14,15.77-17.13,8.74.01,15.43,16.48,15.72,17.17,0,0-1.37.91-1.37.91Z"
                  />
                </g>
                <path id="hammer" className="hammer-group"
                  d="M67.38,32.31c-.72,0-1.25-.05-1.59-.19-.37-.11-.72-.45-.76-.96-.03-.26-.07-3.27-.08-4.47-.2-.04-.57-.1-1.17-.14-1.85-.12-15.09-.54-20.6.15l-.56.2c-.33.03-7.89.5-12.09.38-4.28-.12-12.25.12-13.02.3-.2.04-.61.1-1.03-.26-.58-.49-.88-1.51-.88-3.11-.01-.41-.04-2.64,1.26-3.37l.19-.11h.22c.1.01,9.52.49,13.3.26,3.84-.24,11.7,0,12.04,0h.26l.3.24c2.09.05,16.56.41,20.57-.3.34-.05.86-.15,1.24-.24l1.14-6.68.19-.18c.14-.12.87-.75,1.7-.64l.52.05,2.09,7.91.31,10.27-.15.2c-.2.27-.65.6-1.25.6-.08,0-.24,0-.46.03-.64.03-1.2.05-1.66.05h-.03Z"
                />
              </svg>
            </Link>
          </div>

          <div className={`transition-transform duration-300 ease-out origin-right ${atTop ? "scale-125" : "scale-100"}`}>
            <Button asChild>
              <Link href="#contact">Work with us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
