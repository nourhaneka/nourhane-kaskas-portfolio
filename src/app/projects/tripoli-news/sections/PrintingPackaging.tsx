"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface PrintingPackagingProps {
    data: {
        title: string;
        description: string;
        details: string[];
        image1?: string;
        image2?: string;
        video1?: string;
        video2?: string;
    };
}

export default function PrintingPackaging({ data }: PrintingPackagingProps) {
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
                {data.details.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {(data.image1 || data.image2) && (
                <div className={styles.imageGrid}>
                    {data.image1 && <img src={data.image1} alt="" />}
                    {data.image2 && <img src={data.image2} alt="" />}
                </div>
            )}
            {(data.video1 || data.video2) && (
                <div className={styles.mediaSplit}>
                    {data.video1 && <video src={data.video1} className={styles.reel} autoPlay loop muted playsInline />}
                    {data.video2 && <video src={data.video2} className={styles.reel} autoPlay loop muted playsInline />}
                </div>
            )}
        </motion.section>
    );
}
