"use client";
import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

export default function DesignSystem({ data }: any) {
    return (
        <motion.section className={styles.section}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2>{data.title}</h2>
            <p>{data.description}</p>

            <ul className={styles.bulletList}>
                {data.focusPoints.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>

            <div className={styles.dualMedia}>
                <img src={data.image1} />
                <img src={data.image2} />
            </div>

        </motion.section>
    );
}
