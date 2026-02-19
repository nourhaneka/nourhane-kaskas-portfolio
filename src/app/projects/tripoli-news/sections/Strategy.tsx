"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface StrategyProps {
    data: {
        title: string;
        description: string;
        points: string[];
        image1: string;
        image2: string;
    };
}

export default function Strategy({ data }: StrategyProps) {
    return (
        <motion.section className={styles.section}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            <ul className={styles.list}>
                {data.points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>

            <div className={styles.editorialGrid}>
                <img src={data.image1} />
                <img src={data.image2} />
            </div>
        </motion.section>
    );
}
