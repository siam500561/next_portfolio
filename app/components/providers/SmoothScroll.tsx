"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if device is mobile
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    lenisRef.current = new Lenis({
      duration: isMobile ? 0.5 : 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isMobile,
      wheelMultiplier: isMobile ? 1.5 : 1,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update scroll height when content changes
    const resizeObserver = new ResizeObserver(() => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
    });

    // Observe both body and html for size changes
    resizeObserver.observe(document.body);
    resizeObserver.observe(document.documentElement);

    // Handle window resize
    const handleResize = () => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-dvh">
      {children}
      {/* Add bottom spacer */}
      <div className="lg:h-[130vh] pointer-events-none" aria-hidden="true" />
    </div>
  );
}
