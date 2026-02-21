import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "@/data/case-studies";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProjectImageGrid } from "@/components/ProjectImageGrid";
import { FadeInSection } from "@/components/FadeInSection";

function formatProjectName(id: string): string {
  return id
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/** Splits body copy on <br/> or <br> and returns paragraphs for rendering */
function bodyToParagraphs(body: string): React.ReactNode {
  const parts = body.split(/<br\s*\/?>/gi).map((s) => s.trim()).filter(Boolean);
  if (parts.length === 0) return null;
  if (parts.length === 1) return <p className="whitespace-pre-wrap">{parts[0]}</p>;
  return (
    <>
      {parts.map((text, i) => (
        <p key={i} className={i > 0 ? "mt-4" : undefined}>
          {text}
        </p>
      ))}
    </>
  );
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const projectName = project.projectName ?? formatProjectName(id);
  const heroImage = project.heroImage ?? project.image ?? null;
  const galleryImages = project.galleryImages ?? [];

  return (
    <div>
      {/* Hero: full-width rounded image with overlay (client name + project name) */}
      <section className="px-4 sm:px-6 pt-6 sm:pt-2 pb-0 bg-brand-background">
        <FadeInSection>
        <div className="relative w-full aspect-21/9 max-h-[700px] rounded-2xl overflow-hidden bg-surfaces">
          {heroImage ? (
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-sky-blue-light/30 to-blue-green/20" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white text-center">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white/90 mb-1">
              {project.clientName}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {projectName}
            </h1>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* First section: title + body (background color) */}
      <section className="px-4 sm:px-6 py-12 md:py-48 bg-brand-background">
        <FadeInSection>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-space-blue mb-12 text-center">
            {project.section1Title ?? "About this project"}
          </h2>
          <div className="text-lg text-deep-space-blue/85 leading-relaxed prose prose-lg max-w-none prose-p:text-center">
            {project.section1Body ? (
              bodyToParagraphs(project.section1Body)
            ) : (
              <p>Project details and description can be added here.</p>
            )}
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Image grid (white), 4 cols desktop / 2 cols mobile, click to full-screen */}
      {galleryImages.length > 0 && (
        <section className="px-4 sm:px-6 py-16 md:py-24 bg-white">
          <FadeInSection>
          <div className="container mx-auto ">
            <ProjectImageGrid images={galleryImages} />
          </div>
          </FadeInSection>
        </section>
      )}

      {/* Second section: title + body (white) */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-white">
        <FadeInSection>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-space-blue mb-12 text-center">
            {project.section2Title ?? "More about this work"}
          </h2>
          <div className="text-lg text-deep-space-blue/85 leading-relaxed prose prose-lg max-w-none prose-p:text-center">
            {project.section2Body ? (
              bodyToParagraphs(project.section2Body)
            ) : (
              <p>Additional context, outcomes, or credits can go here.</p>
            )}
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Case studies carousel (white) */}
      <section className="bg-white overflow-x-hidden">
        <HeroCarousel initialCaseStudyId={id} />
      </section>

      {/* Footer is rendered by root layout below main */}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  const projectName = project?.projectName ?? formatProjectName(id);
  const clientName = project?.clientName ?? "Project";
  return {
    title: `${projectName} | ${clientName} | Interactive Mechanics`,
    description: project?.section1Body?.slice(0, 160) ?? `Learn about ${projectName} at Interactive Mechanics.`,
  };
}
