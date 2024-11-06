"use client";

import { TextureButton } from "@/components/ui/TextureButton";
import { HERO_CONTENT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-4 lg:mb-36"
    >
      <div className="flex flex-wrap lg:flex-row-reverse">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-end lg:p-8 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
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

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
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
              className="bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
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
              className="my-2 max-w-lg py-5 text-xl leading-relaxed text-center md:text-left"
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
              <TextureButton className="lg:w-fit">
                Download Resume
              </TextureButton>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
