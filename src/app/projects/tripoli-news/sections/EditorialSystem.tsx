"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface EditorialSystemProps {
    data: {
        title: string;
        description: string;
        focusPoints: string[];
        image1: string;
        image2: string;
    };
}

export default function EditorialSystem({ data }: EditorialSystemProps) {
    return (
        <motion.section className={styles.section}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            <ul className={styles.list}>
                {data.focusPoints.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <div className={styles.editorialGrid}>
                <img src={data.image1} />
                <img src={data.image2} />
            </div>
        </motion.section>
    );
}
