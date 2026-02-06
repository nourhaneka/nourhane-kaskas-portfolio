"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface StrategyProps {
    data: {
        title: string;
        description: string;
        points: string[];
        image1: string;
        image2: string;
    };
}


export default function Strategy({ data }: StrategyProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.strategy}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>{data.title}</h2>
            <p>{data.description}</p>


            <ul className={styles.list}>
                {data.points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>


            <div className={styles.mediaSplit}>
                <motion.img src={data.image1} alt="Grid" />
                <motion.img src={data.image2} alt="Templates" />
            </div>
        </motion.section>
    );
}