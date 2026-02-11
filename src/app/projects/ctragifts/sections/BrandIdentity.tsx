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
        image3: string;
        image4: string;
        image5: string;
        image6: string;
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

            {/* IMAGES */}
            <div className={styles.mediaSplit}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image1} alt="Brand board" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image2} alt="Palette" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image3} alt="Palette" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image4} alt="Palette" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image5} alt="Palette" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={data.image6} alt="Palette" />
                </motion.div>
            </div>

        </motion.section>
    );
}
