"use client";

import { motion } from "framer-motion";
import styles from "../tripolium-case-study.module.css";

interface ResultsProps {
    data: {
        summary: string;
        outcomes: string[];
        reels?: string[];     // 9:16 videos
        images?: string[];    // 16:9 images
    };
}

export default function Results({ data }: ResultsProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Results</h2>
            <p className={styles.lead}>{data.summary}</p>

            {/* Reel Videos */}
            {data.reels && (
                <div className={styles.reelsGrid}>
                    {data.reels.map((src, i) => (
                        <video
                            key={i}
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.reelResults}
                        />
                    ))}
                </div>
            )}

            {/* 16:9 Images */}
            {data.images && (
                <div className={styles.resultsImages}>
                    {data.images.map((src, i) => (
                        <img key={i} src={src} alt={`Result layout ${i + 1}`} />
                    ))}
                </div>
            )}

            <ul className={styles.resultsList}>
                {data.outcomes.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </motion.section>
    );
}
