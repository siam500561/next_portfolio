"use client";

import { Project } from "@/app/types/project";
import { fetchProjects } from "@/lib/fetchProjects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollAnimation } from "./ScrollAnimation";
import ParallaxSection from "./effects/ParallaxSection";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getProjects() {
      const data = await fetchProjects();
      setProjects(data);
    }
    getProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <ScrollAnimation>
      <ParallaxSection
        className="lg:py-24 relative z-10"
        offset={["start center", "end start"]}
        yOffset={["0%", "100%"]}
      >
        <ParallaxSection scale yOffset={["0%", "25%"]}>
          <h2 className="mb-20 text-center text-4xl">Featured Projects</h2>
        </ParallaxSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <ParallaxSection
              key={project._id}
              yOffset={["2%", "-2%"]}
              opacityRange={[0.8, 1]}
            >
              <motion.div
                variants={projectVariants}
                className="group relative overflow-hidden rounded-xl bg-stone-900/50 p-2 backdrop-blur-sm"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} - Project Screenshot | Built by Ohiduzzaman Siam`}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={90}
                    fill
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-xl font-semibold text-stone-100">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-stone-300 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <div className="mt-3 flex justify-end">
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full bg-white px-3.5 py-1.5 text-xs text-black transition-colors hover:bg-stone-200"
                    >
                      View Project
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </motion.div>
      </ParallaxSection>
    </ScrollAnimation>
  );
}
