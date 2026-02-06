"use client";

import { motion } from "framer-motion";
import styles from "../tripolium-case-study.module.css";

interface HeroProps {
    data: {
        title: string;
        labels: string[];
        summary: string;
        overview: string;
        image1?: string;
        image2?: string;
    };
}

export default function Hero({ data }: HeroProps) {
    return (
        <motion.section
            className={styles.hero}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className={styles.heroContent}>
                <h1>{data.title}</h1>

                <div className={styles.labels}>
                    {data.labels.map((label, i) => (
                        <span key={i} className={styles.tag}>
                            {label}
                        </span>
                    ))}
                </div>

                <p className={styles.lead}>{data.summary}</p>
                <p className={styles.overview}>{data.overview}</p>
            </div>

            {(data.image1 || data.image2) && (
                <div className={styles.heroImages}>
                    {data.image1 && <img src={data.image1} alt="Tripolium Social Media Visuals Design" />}
                    {data.image2 && <img src={data.image2} alt="Eid Social Media Visuals Design" />}
                </div>
            )}
        </motion.section>
    );
}
