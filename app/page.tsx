"use client";

import { Analytics } from "@iamsiam/analytics";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div className="w-full">
      <Analytics
        apiKey="wa_5TDkrjFK5WQPeBPd3NYVtOmy8ZPN45Qu"
        apiUrl="https://iamsiamanylatics.vercel.app"
      />
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:18px_24px] opacity-45"></div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1], // Custom easing
              opacity: { duration: 1.5 },
            }}
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb26,#000)]"
          />
        </div>
      </div>

      <div className="container mx-auto px-8 text-stone-300 h-full lg:pb-96">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Testimonials />
      </div>
    </div>
  );
}
