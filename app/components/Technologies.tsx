"use client";

import { motion } from "framer-motion";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ScrollAnimation } from "./ScrollAnimation";
import ParallaxSection from "./effects/ParallaxSection";

export default function Technologies() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const technologies = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: FaNodeJs, color: "text-green-500" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: SiPrisma, color: "text-blue-500" },
    { Icon: DiRedis, color: "text-orange-500", size: "size-20" },
    { Icon: TbBrandNextjs, color: "text-white" },
  ];

  return (
    <ScrollAnimation>
      <ParallaxSection className="pb-24 relative z-10">
        <ParallaxSection scale yOffset={["0%", "50%"]}>
          <h2 className="my-20 text-center text-4xl">Technologies</h2>
        </ParallaxSection>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map(({ Icon, color, size = "size-16" }, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-3"
            >
              <Icon className={`text-7xl ${color} ${size}`} />
            </motion.div>
          ))}
        </motion.div>
      </ParallaxSection>
    </ScrollAnimation>
  );
}
