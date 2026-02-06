"use client";

import { motion } from "framer-motion";
import styles from "../takyf-case-study.module.css";

interface HeroProps {
    data: {
        title: string;
        labels: string[];
        summary: string;
        overview: string;
        image?: string;
    };
}

export default function Hero({ data }: HeroProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.hero}`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <h1>{data.title}</h1>
            <div className={styles.labels}>
                {data.labels.map((label, i) => (
                    <span key={i} className={styles.tag}>
                        {label}
                    </span>
                ))}
            </div>

            <p className={styles.lead}>{data.summary}</p>

            {data.image && (
                <div className={styles.heroImage}>
                    <img src={data.image} alt={`${data.title} showcase`} />
                </div>
            )}
            <p className={styles.overview}>{data.overview}</p>
        </motion.section>
    );
}
