"use client";

import { HERO_CONTENT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";
import ParallaxSection from "./effects/ParallaxSection";

export default function Hero() {
  return (
    <ScrollAnimation>
      <ParallaxSection
        offset={["start start", "end start"]}
        opacityRange={[1, 0]}
        className="pb-4 lg:mb-36 relative"
      >
        <div className="flex flex-wrap lg:flex-row-reverse -mt-10">
          <ParallaxSection
            yOffset={["0%", "25%"]}
            opacityRange={[1, 0]}
            className="w-full lg:w-1/2"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
              }}
            >
              <div className="flex justify-center lg:justify-end relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className="relative group"
                >
                  <div
                    className="absolute inset-x-0 bottom-0 h-80 rounded-b-3xl z-10 rotate-180"
                    style={{
                      background:
                        "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1))",
                      maskImage: "linear-gradient(to top, transparent, black)",
                      WebkitMaskImage:
                        "linear-gradient(to top, transparent, black)",
                    }}
                  />

                  <Image
                    src="/profile.webp"
                    alt="profile"
                    width={1000}
                    height={1000}
                    priority
                    quality={100}
                    className="rounded-3xl border-stone-900 shadow-xl w-96 lg:w-[27rem]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection
            yOffset={["0%", "40%"]}
            opacityRange={[1, 0]}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col items-center lg:items-start mt-5 lg:mt-0">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="pb-4 text-4xl tracking-tight md:text-5xl xl:text-8xl"
              >
                Ohiduzzaman Siam
              </motion.h2>

              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                className="my-2 max-w-lg py-4 text-xl leading-relaxed text-center md:text-left"
              >
                {HERO_CONTENT}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              >
                <div className="lg:w-fit bg-white rounded-full p-3 px-6 text-primary select-none cursor-pointer hover:bg-stone-200 transition-colors">
                  Download Resume
                </div>
              </motion.div>
            </div>
          </ParallaxSection>
        </div>
      </ParallaxSection>
    </ScrollAnimation>
  );
}
