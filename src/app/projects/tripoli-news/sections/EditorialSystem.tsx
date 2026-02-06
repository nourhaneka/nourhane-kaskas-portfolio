"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface EditorialSystemProps {
    data: {
        title: string;
        description: string;
        focusPoints: string[];
        image1?: string;
        image2?: string;
    };
}

export default function EditorialSystem({ data }: EditorialSystemProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.editorial}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2>{data.title}</h2>
            <p className={styles.lead}>{data.description}</p>

            <ul className={styles.points}>
                {data.focusPoints.map((point, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                    >
                        {point}
                    </motion.li>
                ))}
            </ul>

            <div className={styles.heroImage}>
                {data.image1 && (
                    <motion.img
                        src={data.image1}
                        alt={data.title + " image 1"}
                        whileHover={{ scale: 1.03 }}
                    />
                )}
                {data.image2 && (
                    <motion.img
                        src={data.image2}
                        alt={data.title + " image 2"}
                        whileHover={{ scale: 1.03 }}
                    />
                )}
            </div>
        </motion.section>
    );
}
