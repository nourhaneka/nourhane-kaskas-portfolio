"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import "./IntroSection.css";

const headline =
  "Creating clear, expressive digital experiences that help brands communicate with confidence.";

export default function IntroSection() {
  const words = useMemo(() => headline.split(" "), []);

  return (
    <section className="intro-section">
      <div className="intro-inner">
        {/* HEADLINE */}
        <h2 className="intro-title">
          {words.map((word, i) => {
            const highlight =
              word === "brands" ||
              word === "clear," ||
              word === "expressive" ||
              word === "confidence.";

            return (
              <motion.span
                key={i}
                className={`intro-word ${highlight ? "highlight" : ""}`}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.035,
                }}
                viewport={{ once: true }}
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </h2>

        {/* TEXT + CTA */}
        <div className="intro-bottom">
          <motion.p
            className="intro-paragraph"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            I design brand identities, social media visuals,
            and high-quality photo and video edits—helping
            businesses communicate clearly and execute ideas efficiently from concept to delivery.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#portfolio"
            className="intro-button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.9,
            }}
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="button-fill"
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
              className="button-text"
              variants={{
                rest: { color: "#111" },
                hover: { color: "#fff" },
              }}
              transition={{ duration: 0.25 }}
            >
              Start a Project
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
