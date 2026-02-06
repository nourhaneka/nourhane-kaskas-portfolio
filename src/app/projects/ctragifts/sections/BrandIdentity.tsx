"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface BrandIdentityProps {
    data: {
        title: string;
        description: string;
        points: string[];
        image1: string;
        image2: string;
    };
}


export default function BrandIdentity({ data }: BrandIdentityProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.brand}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>{data.title}</h2>
            <p>{data.description}</p>


            <ul className={styles.points}>
                {data.points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>


            <div className={styles.mediaSplit}>
                <motion.img
                    src={data.image1}
                    alt="Brand board"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={data.image2}
                    alt="Palette"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                />
            </div>
        </motion.section>
    );
}