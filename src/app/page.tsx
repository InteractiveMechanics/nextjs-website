import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FadeInSection } from "@/components/FadeInSection";
import { clientLogos } from "@/data/client-logos";

const GRID_SLOTS = 24;
const LOGO_COUNT = 18;
/** Indices (0–23) that stay empty on desktop; hidden on mobile so logos reflow into 2 columns */
const EMPTY_SLOT_INDICES = [1, 4, 8, 13, 17, 21];

function buildLogoGridSlots() {
  const logoEntries = Array.from(
    { length: LOGO_COUNT },
    (_, i) => ({ ...clientLogos[i % clientLogos.length], key: `${clientLogos[i % clientLogos.length].id}-${i}` })
  );
  let logoIdx = 0;
  return Array.from({ length: GRID_SLOTS }, (_, i) =>
    EMPTY_SLOT_INDICES.includes(i)
      ? { type: "empty" as const }
      : { type: "logo" as const, client: logoEntries[logoIdx++] }
  );
}

const services = [
  { label: "AI-enabled transformation", color: "bg-princeton-orange" },
  { label: "Experience and environmental design", color: "bg-blue-green" },
  { label: "Digital application development", color: "bg-amber-flame" },
  { label: "Platform implementation and integration", color: "bg-sky-blue-light" },
  { label: "Content production and strategy", color: "bg-deep-space-blue" },
  { label: "Rapid prototyping and ideation", color: "bg-blue-green" },
  { label: "Video production and editing", color: "bg-amber-flame" },
  { label: "Fabrication and installation", color: "bg-sky-blue-light" },
  { label: "Digital strategy and planning", color: "bg-deep-space-blue" },
  { label: "Design thinking workshops", color: "bg-princeton-orange" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section: carousel outside container so it spans full viewport width */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col overflow-x-hidden bg-brand-background">
        <FadeInSection>
        <div className="container mx-auto shrink-0 px-6 pt-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-space-blue leading-tight mb-8">
            Environmental and digital experiences for arts, culture, and beyond
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-xl px-10 py-5 min-h-14" asChild>
              <Link href="#contact">Work with us</Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-xl px-10 py-5 min-h-14" asChild>
              <Link href="#story">Read our story</Link>
            </Button>
          </div>
        </div>
        </FadeInSection>
        <div className="flex-1 flex flex-col justify-end min-h-0 w-full">
          <HeroCarousel />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-48 px-6 bg-surfaces">
        <FadeInSection>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-blue-green font-semibold uppercase tracking-wider mb-4 text-lg">
            Once upon a time
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-deep-space-blue mb-8">
            There was a digital agency that dreamed of creating amazing experiences
          </h2>
          
          <p className="text-xl text-deep-space-blue/80 leading-relaxed mb-16 max-w-3xl mx-auto font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-90">
            Interactive Mechanics was started in 2012 with the aspiration to build incredible digital experiences to inspire, empower, and educate. And for years, we did that and more: we created experiences for institutions big and small, <a href="https://www.aam-us.org/programs/awards-program/2016-muse-award-winners/" target="_blank" rel="noopener noreferrer">won awards for that work</a>, gave dozens talks and presented to our industry, organized events and <a href="https://technical.ly/software-development/interactive-mechanics-fellowship-program-demo/" target="_blank" rel="noopener noreferrer">ran an incredible fellowship program</a>, and were <a href="https://techinmotion.com/timmy-awards/winners" target="_blank" rel="noopener noreferrer">recognized for our focus on equity and inclusion</a>.
          </p>
        </div>
        </FadeInSection>

        {/* Client Logo Grid — breaks out of container; 24 slots (18 logos + 6 empty). Mobile: 2 cols, empty hidden. */}
        <FadeInSection>
        <div className="w-full px-6 py-24">
          <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 gap-4 w-full">
            {buildLogoGridSlots().map((slot, i) =>
              slot.type === "empty" ? (
                <div
                  key={`empty-${i}`}
                  className="aspect-3/2 hidden sm:block"
                  aria-hidden
                />
              ) : (
                <div
                  key={slot.client.key ?? slot.client.id}
                  className="group aspect-3/2 rounded-lg border border-gray-200 flex items-center justify-center p-3"
                >
                  <Image
                    src={slot.client.logo}
                    alt={slot.client.clientName}
                    width={160}
                    height={107}
                    className="max-w-full max-h-full w-auto h-auto object-contain object-center grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              )
            )}
          </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-space-blue mb-8">
            Sometimes, things change
          </h2>
          
          <p className="text-xl text-deep-space-blue/80 leading-relaxed mb-16 max-w-3xl mx-auto font-semibold">
            But in 2019, Interactive Mechanics made a change: we scaled back our team, closed our physical office, and changed our operating model to a more flexible, project-based approach. Same passion, same commitment to building amazing experiences, just a different way of doing it.
          </p>

          <p className="text-xl text-deep-space-blue/80 leading-relaxed max-w-3xl mx-auto font-semibold">
            Today, we're a distributed, remote-first team that brings the right team to every project. Our network of collaborators spans design, video production, engineering, exhibit design, fabrication, strategy, and more.
          </p>
        </div>
        </FadeInSection>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-white">
        <FadeInSection>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-blue-green font-semibold uppercase tracking-wider mb-4 text-lg">
            What we do
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-deep-space-blue mb-12">
            We deliver end-to-end digital transformation services for any size organization or institution
          </h2>

          <p className="text-xl text-deep-space-blue/80 leading-relaxed mb-16 max-w-3xl mx-auto font-semibold">
            Whether you're navigating a new digital strategy, modernizing your existing systems, or building something new, we can help you create something amazing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service, index) => (
              <span
                key={index}
                className={`${service.color} text-white px-5 py-2.5 rounded-full text-base font-semibold`}
              >
                {service.label}
              </span>
            ))}
          </div>
        </div>
        </FadeInSection>
      </section>

    </>
  );
}
