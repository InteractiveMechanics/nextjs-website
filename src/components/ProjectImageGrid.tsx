"use client";

import { createPortal } from "react-dom";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ProjectImageGridProps {
  images: string[];
}

export function ProjectImageGrid({ images }: ProjectImageGridProps) {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const close = useCallback(() => setFullscreenIndex(null), []);
  const open = (index: number) => setFullscreenIndex(index);

  useEffect(() => {
    if (fullscreenIndex === null) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [fullscreenIndex, close]);

  useEffect(() => {
    if (fullscreenIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreenIndex]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => open(index)}
            className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-surfaces focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {fullscreenIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center"
            style={{ position: "fixed", inset: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="View image full screen"
          >
            <div className="absolute inset-12 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={images[fullscreenIndex]}
                  alt={`Gallery image ${fullscreenIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="100vw"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-4 right-4 z-10 text-white p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
