"use client";
import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface Step {
    step: string;
    title: string;
    description: string;
    image: string;
}

interface ProcessProps {
    data: Step[];
}

export default function Process({ data }: ProcessProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {data.map((item, i) => (
                <motion.div
                    key={i}
                    className={styles.processStep}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                    <h3>{item.step}. {item.title}</h3>
                    <p>{item.description}</p>
                    <motion.img src={item.image} alt={item.title} whileHover={{ scale: 1.03 }} />
                </motion.div>
            ))}
        </motion.section>
    );
}
