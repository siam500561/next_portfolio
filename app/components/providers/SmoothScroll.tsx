"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.height = "auto";
    root.style.overflowY = "visible";

    // Check if device is mobile
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.5 : 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isMobile, // Disable smooth scrolling on mobile
      wheelMultiplier: isMobile ? 1.5 : 1,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle window resize
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      root.style.height = "";
      root.style.overflowY = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="w-full min-h-screen">{children}</div>;
}
