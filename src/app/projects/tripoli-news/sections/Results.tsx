"use client";
import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

export default function Results({ data }: any) {
    return (
        <motion.section className={styles.section}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2>Results</h2>
            <p>{data.summary}</p>

            <ul className={styles.resultsList}>
                {data.outcomes.map((o: string, i: number) => (
                    <li key={i}>{o}</li>
                ))}
            </ul>

        </motion.section>
    );
}
