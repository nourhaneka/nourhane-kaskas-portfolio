"use client";

import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";

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
            className={`${styles.section} ${styles.hero}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h1>{data.title}</h1>


            <div className={styles.labels}>
                {data.labels.map((label, i) => (
                    <span key={i} className={styles.tag}>{label}</span>
                ))}
            </div>


            <p className={styles.lead}>{data.summary}</p>


            <div className={styles.heroImages}>
                {data.image1 && <img src={data.image1} alt="hero 1" />}
                {data.image2 && <img src={data.image2} alt="hero 2" />}
            </div>


            <p className={styles.overview}>{data.overview}</p>
        </motion.section>
    );
}