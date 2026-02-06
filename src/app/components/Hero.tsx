"use client";

import React, { forwardRef } from "react";
import { motion, cubicBezier, useMotionValue, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import "./hero.css";

// Fade-up for main name
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const pillAnim = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  /* ✅ HOOKS MUST LIVE HERE */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="hero-root"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      {/*  <Navbar /> */}
      {/* INTERACTIVE BACKGROUND */}
      <motion.div
        className="hero-bg"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      />

      <div className="hero-center-wrapper">
        <div className="name-block">
          <motion.h1 className="hero-title" variants={fadeUp}>
            NOURHANE
          </motion.h1>

          <div className="surname-row">
            <div className="surname-group">
              <motion.h1 className="hero-surname" variants={fadeUp}>
                KASKAS
              </motion.h1>

              <motion.div className="hero-tagline-container" variants={fadeUpSoft}>
                <span className="tagline-text written">
                  Where creativity meets intention!
                </span>
              </motion.div>
            </div>

            <motion.div
              className="pills-block"
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            >
              {["Social Media & Content Design", "Product Design", "Photography & Visual Editing"].map(
                (pill, i) => (
                  <motion.span key={i} className="tag-pill" variants={pillAnim}>
                    {pill}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

Hero.displayName = "Hero";
export default Hero;
