"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: [string, string];
  className?: string;
  yOffset?: [string, string];
  opacityRange?: [number, number];
  scale?: boolean;
}

export default function ParallaxSection({
  children,
  offset = ["start end", "end start"],
  className = "",
  yOffset = ["0%", "100%"],
  opacityRange = [0, 1],
  scale = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as ["start end" | "end start", "start end" | "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yOffset);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [opacityRange[0], 1, opacityRange[1]]
  );
  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scale ? [0.8, 1, 0.8] : [1, 1, 1]
  );

  // If mobile, return without parallax effects
  if (isMobile) {
    return (
      <div ref={containerRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ opacity, y, scale: scaleValue }}
    >
      {children}
    </motion.div>
  );
}
