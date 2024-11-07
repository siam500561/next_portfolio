"use client";

import { TESTIMONIALS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ScrollAnimation } from "./ScrollAnimation";
import ParallaxSection from "./effects/ParallaxSection";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollAnimation>
      <ParallaxSection
        className="lg:pt-[35vh] mt-[65vh] pb-20"
        offset={["start center", "end start"]}
        yOffset={["0%", "50%"]}
      >
        <div className="lg:mt-24">
          <ParallaxSection scale yOffset={["0%", "25%"]}>
            <h2 className="mb-20 text-center text-4xl">Testimonials</h2>
          </ParallaxSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex flex-col gap-4 overflow-hidden py-4"
          >
            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 w-[20vw] bg-gradient-to-r from-black to-transparent h-full" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 w-[20vw] bg-gradient-to-l from-black to-transparent h-full" />

            {/* First Row */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 mb-4"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[450px] bg-stone-900/50 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-100">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-stone-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS]
                .reverse()
                .map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[450px] bg-stone-900/50 backdrop-blur-sm p-6 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-100">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-stone-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>
    </ScrollAnimation>
  );
}
