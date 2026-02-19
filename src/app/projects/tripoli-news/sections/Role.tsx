"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface RoleProps {
    data: {
        title: string;
        summary: string;
        responsibilities: string[];
        image1: string;
        image2: string;
    };
}

export default function Role({ data }: RoleProps) {
    return (
        <motion.section className={styles.section}>
            <h2>{data.title}</h2>
            <p>{data.summary}</p>

            <ul className={styles.list}>
                {data.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>

            <div className={styles.editorialGrid}>
                <img src={data.image1} />
                <img src={data.image2} />
            </div>
        </motion.section>
    );
}
