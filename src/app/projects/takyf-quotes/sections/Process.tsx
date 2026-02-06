"use client";

import { motion } from "framer-motion";
import styles from "../takyf-case-study.module.css";

interface ProcessStep {
    step: string;
    title: string;
    description: string;
    image?: string;
}

interface ProcessProps {
    data: ProcessStep[];
}

export default function Process({ data }: ProcessProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Process</h2>

            <div className={styles.processList}>
                {data.map((item, i) => (
                    <div key={i} className={styles.processRow}>
                        {/* Left column */}
                        <div className={styles.processContent}>
                            <span className={styles.step}>{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>

                        {/* Image under content */}
                        {item.image && (
                            <div className={styles.processImageWrapper}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
