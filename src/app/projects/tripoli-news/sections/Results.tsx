"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface ResultsProps {
    data: {
        summary: string;
        outcomes: string[];
    };
}

export default function Results({ data }: ResultsProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.results}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2>Results</h2>
            <p className={styles.lead}>{data.summary}</p>

            <ul className={styles.list}>
                {data.outcomes.map((item, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}
