"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface RoleProps {
    data: {
        title: string;
        summary: string;
        responsibilities: string[];
    };
}


export default function Role({ data }: RoleProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.role}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2>{data.title}</h2>
            <p className={styles.lead}>{data.summary}</p>
            <ul className={styles.list}>
                {data.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </motion.section>
    );
}