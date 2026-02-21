import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-deep-space-blue text-surfaces">
      {/* Let's create something... section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-surfaces mb-12">
            Let&apos;s create something amazing together
          </h2>
          <Button size="lg" variant="secondary" className="border-surfaces text-surfaces hover:bg-surfaces/10 hover:text-surfaces px-10 py-5 min-h-14 text-xl" asChild>
            <Link href="mailto:hello@interactivemechanics.com">Work with us</Link>
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-surfaces/20" />

      {/* Logo and copyright */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" aria-label="Interactive Mechanics home">
              <img src="/logo-inverted.svg" alt="Interactive Mechanics" className="w-18 h-18" />
            </Link>
            
            <p className="text-xl font-bold">
              Interactive Mechanics
            </p>
            
            <p className="text-surfaces/70 text-base">
              Copyright © 2026 Interactive Mechanics LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
