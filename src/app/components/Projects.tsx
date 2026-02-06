"use client";

import Link from "next/link";
import { motion, Variants, useMotionValue } from "framer-motion";
import { useState } from "react";
import "./projects.css";

type Project = {
  number: string;
  title: string;
  tags: string[];
  slug: string;
  image: string;
  description: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const projects: Project[] = [
  {
    number: "01",
    title: "Takyf Quotes - Social Brand Visual Identity",
    tags: [
      "Branding",
      "Social Media Design",
      "Content Strategy",
      "Website Design",
    ],
    slug: "takyf-quotes",
    image: "/images/front-page-images/front-page-logo.png",
    description: "Designed a cohesive visual system and content structure to strengthen brand recognition and audience engagement.",
  },
  {
    number: "02",
    title: "Tripolium Center - Community Branding",
    tags: [
      "Branding",
      "Photography ",
      "Social Media Visuals",
      "Content Strategy",
    ],
    slug: "tripolium-center",
    image: "/images//front-page-images/tripolium-front.jpg",
    description: "Created a unified brand presence and visual content to support visibility and trust for a local business.",
  },
  {
    number: "03",
    title: "Ctra Gifts - Product Visual Content",
    tags: [
      "Content Strategy",
      "Photography",
      "Social Media Design",
    ],
    slug: "ctragifts",
    image: "/images/front-page-images/ctra.jpg",
    description: "Developed content-driven visuals and photography to enhance product presentation and support social media growth.",
  },
  {
    number: "04",
    title: "Tripoli News - Media Platform Design",
    tags: [
      "Photography",
      "Social Media Design",
      "Branding",
    ],
    slug: "tripoli-news",
    image:
      "/images/front-page-images/tripoli-news-case-studies.jpg",
    description: "Designed consistent branding and social visuals to improve clarity, credibility, and audience retention.",
  },
];

export default function Projects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="projects-section" id="projects">
      <header className="projects-header">
        <p className="projects-eyebrow">Featured Case Studies</p>
        <h2 className="projects-title">Selected Work</h2>
      </header>

      <motion.ul
        className="projects-list"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {projects.map((project) => {
          const isActive = active?.slug === project.slug;

          return (
            <motion.li
              key={project.slug}
              variants={item}
              className="project-item"
              onMouseEnter={() => setActive(project)}
              onMouseLeave={() => setActive(null)}
              onMouseMove={(e) => {
                mouseX.set(e.clientX + 32);
                mouseY.set(e.clientY + 32);
              }}
              animate={{
                backgroundColor: isActive
                  ? "var(--primary)"
                  : "transparent",
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="project-row"
              >
                <div className="project-left">
                  <span className="project-number">{project.number}</span>

                  <div className="project-text">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>


                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>

      {/*<div className="projects-more">
        <motion.a
          href="/portfolio"
          className="glass-button glass-button--small"
          whileHover="hover"
          animate="rest"
        >
          <motion.span
            className="glass-button-fill"
            variants={{
              rest: { scaleY: 0 },
              hover: { scaleY: 1 },
            }}
            transition={{
              duration: 0.45,
              ease: [0.25, 1, 0.5, 1],
            }}
          />

          <motion.span
            className="glass-button-text"
            variants={{
              rest: { color: "var(--text-color)" },
              hover: { color: "#fff" },
            }}
            transition={{ duration: 0.25 }}
          >
            View All Projects
          </motion.span>
        </motion.a>
      </div>*/}

      {/* Cursor-follow preview */}
      <motion.div
        className="project-preview"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.96,
        }}
      >
        {active && (
          <img
            src={active.image}
            alt={active.title}
          />
        )}
      </motion.div>
    </section>
  );
}
