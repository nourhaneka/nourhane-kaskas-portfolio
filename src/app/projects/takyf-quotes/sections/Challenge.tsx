"use client";

import { motion } from "framer-motion";
import styles from "../takyf-case-study.module.css";

interface ChallengeProps {
    data: {
        label: string;
        description: string;
        problems: string[];
        beforeImage?: string;
        afterImage?: string;
        comparisonLabel?: string;
    };
}

export default function Challenge({ data }: ChallengeProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>{data.label}</h2>
            <p className={styles.lead}>{data.description}</p>

            <ul className={styles.problemList}>
                {data.problems.map((problem, i) => (
                    <li key={i}>{problem}</li>
                ))}
            </ul>

            {(data.beforeImage || data.afterImage) && (
                <div className={styles.comparison}>
                    {data.comparisonLabel && (
                        <span className={styles.comparisonLabel}>
                            {data.comparisonLabel}
                        </span>
                    )}

                    <div className={styles.comparisonGrid}>
                        {data.beforeImage && (
                            <figure>
                                <img src={data.beforeImage} alt="Before design" />
                                <figcaption>Before</figcaption>
                            </figure>
                        )}

                        {data.afterImage && (
                            <figure>
                                <img src={data.afterImage} alt="After design" />
                                <figcaption>After</figcaption>
                            </figure>
                        )}
                    </div>
                </div>
            )}
        </motion.section>
    );
}
