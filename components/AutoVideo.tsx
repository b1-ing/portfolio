"use client";

import { useEffect, useRef } from "react";

/** A muted, looping, GIF-style video that stays paused for visitors who prefer reduced motion. */
export function AutoVideo({ src, label, className }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
