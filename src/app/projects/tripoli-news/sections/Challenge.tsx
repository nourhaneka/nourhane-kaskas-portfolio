"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface ChallengeProps {
    data: {
        label: string;
        description: string;
        problems: string[];
        image?: string;
        video?: string;
        video2?: string;
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
            <span className={styles.sectionLabel}>{data.label}</span>
            <h2>The Challenge</h2>

            <p className={styles.lead}>{data.description}</p>

            <ul className={styles.bulletList}>
                {data.problems.map((problem, i) => (
                    <li key={i}>{problem}</li>
                ))}
            </ul>

            {(data.image || data.video) && (
                <div className={styles.mediaSplit}>
                    {data.image && <img src={data.image} alt="Design context" />}

                    {data.video && (
                        <video
                            src={data.video}
                            className={styles.reel}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}

                    {data.video2 && (
                        <video
                            src={data.video2}
                            className={styles.reel}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                </div>
            )}
        </motion.section>
    );
}
