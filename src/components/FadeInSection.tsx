"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  /** Amount to move up when visible (default ~48px) */
  moveUp?: "sm" | "md" | "lg";
}

const moveUpClasses = {
  sm: "translate-y-8",
  md: "translate-y-12",
  lg: "translate-y-16",
};

export function FadeInSection({
  children,
  className,
  moveUp = "md",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out",
        moveUpClasses[moveUp],
        visible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}
