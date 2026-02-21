"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD = 50;

const RADIUS = 420;
const TILE_SIZE = 300;
const DEG_TO_RAD = Math.PI / 180;

/** Tiles spread over the visible arc from -90° to 90°. Returns position and angle (for per-tile rotation). */
function getTilePositionOnWheel(index: number, total: number) {
  const spread = total > 1 ? 180 / (total - 1) : 0;
  const angleDeg = -90 + index * spread;
  const angleRad = angleDeg * DEG_TO_RAD;
  const x = RADIUS * Math.cos(angleRad);
  const y = RADIUS * Math.sin(angleRad);
  return { x, y, angleDeg };
}

function TileContent({ study, isActive }: { study: CaseStudy; isActive: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-full rounded-xl flex flex-col overflow-hidden transition-shadow duration-300 relative",
        isActive
          ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "bg-surfaces/80"
      )}
    >
      {study.image ? (
        <img
          src={study.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      ) : (
        <div className="flex-1 min-h-0 bg-linear-to-br from-sky-blue-light/20 to-blue-green/20 rounded-t-xl" />
      )}
      {isActive && (
        <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
          <div
            className="w-full min-h-28 bg-linear-to-t from-black/70 to-transparent rounded-b-xl"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 pb-8 px-5 flex justify-center">
            <span
              className="text-white text-xl font-semibold text-center line-clamp-2"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.5)" }}
            >
              {study.clientName}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const CENTER_Y_OFFSET = 2;

function getInitialIndex(initialCaseStudyId: string | undefined): number {
  const total = caseStudies.length;
  if (!initialCaseStudyId || total === 0) return Math.floor(total / 2);
  const idx = caseStudies.findIndex((s) => s.id === initialCaseStudyId);
  return idx >= 0 ? idx : Math.floor(total / 2);
}

export function HeroCarousel({ initialCaseStudyId }: { initialCaseStudyId?: string } = {}) {
  const total = caseStudies.length;
  const [activeIndex, setActiveIndex] = useState(() => getInitialIndex(initialCaseStudyId));
  const touchStartX = useRef<number | null>(null);
  const centerY = RADIUS * CENTER_Y_OFFSET;
  const wheelHeight = RADIUS * 3;
  const anglePerTile = total > 1 ? 180 / (total - 1) : 0;
  const wheelRotationDeg = -activeIndex * anglePerTile;
  const clipHeight = RADIUS + TILE_SIZE / 2;
  const marginTop = -(centerY - RADIUS - TILE_SIZE / 2) + 60;

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX > SWIPE_THRESHOLD) {
      goTo(activeIndex - 1);
    } else if (deltaX < -SWIPE_THRESHOLD) {
      goTo(activeIndex + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative min-w-0" style={{ minHeight: clipHeight }}>
      {/* Visible arc: clip to prevent horizontal overflow. Touch/swipe to change tile. */}
      <div
        className="w-full overflow-hidden relative min-w-0 touch-pan-y"
        style={{ height: clipHeight }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative w-full mx-auto transition-transform duration-500 ease-out"
          style={{
            height: wheelHeight,
            marginTop,
            transform: `rotate(${wheelRotationDeg}deg)`,
            transformOrigin: `50% ${centerY}px`,
          }}
        >
          {caseStudies.map((study, index) => {
            const { x, y, angleDeg } = getTilePositionOnWheel(index, total);
            const isActive = index === activeIndex;
            const top = centerY + y - TILE_SIZE / 2;
            const dist = Math.min(
              Math.abs(index - activeIndex),
              total - Math.abs(index - activeIndex)
            );
            const zIndex = isActive ? 20 : 20 - dist;
            const tileRotationDeg = angleDeg + 90;

            const style = {
              position: "absolute" as const,
              width: TILE_SIZE,
              height: TILE_SIZE,
              left: "50%",
              top: `${top}px`,
              transform: `translate(calc(-50% + ${x}px), 0) rotate(${tileRotationDeg}deg)`,
              zIndex,
              transition: "transform 0.5s ease-out",
            };

            if (isActive) {
              return (
                <Link
                  key={study.id}
                  href={`/projects/${study.id}`}
                  className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                  style={style}
                >
                  <TileContent study={study} isActive />
                </Link>
              );
            }

            return (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-full h-full"
                style={style}
              >
                <TileContent study={study} isActive={false} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Indicator overlapping bottom of carousel; dots are clickable. */}
      <div
        className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-1.5"
        aria-label={`Case study ${activeIndex + 1} of ${total}`}
      >
        {caseStudies.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              i === activeIndex ? "w-2.5 h-2.5 bg-primary" : "w-2 h-2 bg-black/20 hover:bg-black/30"
            )}
            aria-label={`Go to case study ${i + 1} of ${total}`}
            aria-current={i === activeIndex ? "true" : undefined}
          />
        ))}
        <p className="sr-only">
          {activeIndex + 1} of {total}
        </p>
      </div>
    </div>
  );
}
