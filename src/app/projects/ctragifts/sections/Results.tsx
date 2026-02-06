"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface ResultsProps {
    data: {
        summary: string;
        outcomes: string[];
        reels: string[];
        images: string[];
    };
}


export default function Results({ data }: ResultsProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.results}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>Results</h2>
            <p>{data.summary}</p>


            <ul className={styles.list}>
                {data.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                ))}
            </ul>


            <div className={styles.mediaSplit}>
                {data.reels.map((r, i) => (
                    <motion.video
                        key={i}
                        src={r}
                        autoPlay
                        muted
                        loop
                        playsInline
                        whileHover={{ scale: 1.03 }}
                    />
                ))}
            </div>


            <div className={styles.mediaSplit}>
                {data.images.map((img, i) => (
                    <motion.img key={i} src={img} alt={`Result ${i}`} />
                ))}
            </div>
        </motion.section>
    );
}