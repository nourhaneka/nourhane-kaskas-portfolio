"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface VisualStorytellingProps {
    data: {
        title: string;
        description: string;
        focusPoints: string[];
        image1: string;
        image2: string;
    };
}


export default function VisualStorytelling({ data }: VisualStorytellingProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.visual}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>{data.title}</h2>
            <p>{data.description}</p>


            <ul className={styles.list}>
                {data.focusPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>


            <div className={styles.mediaSplit}>
                <motion.img src={data.image1} alt="Visual 1" whileHover={{ scale: 1.03 }} />
                <motion.img src={data.image2} alt="Visual 2" whileHover={{ scale: 1.03 }} />
            </div>
        </motion.section>
    );
}