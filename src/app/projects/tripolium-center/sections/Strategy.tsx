"use client";

import { motion } from "framer-motion";
import styles from "../tripolium-case-study.module.css";

interface StrategyProps {
    data: {
        title: string;
        description: string;
        points: string[];
        image1?: string;
        image2?: string;
    };
}

export default function Strategy({ data }: StrategyProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>{data.title}</h2>
            <p className={styles.lead}>{data.description}</p>

            <ul className={styles.bulletList}>
                {data.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

            {(data.image1 || data.image2) && (
                <div className={styles.imageGrid}>
                    {data.image1 && <img src={data.image1} alt="" />}
                    {data.image2 && <img src={data.image2} alt="" />}
                </div>
            )}
        </motion.section>
    );
}
