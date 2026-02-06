"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface IdentityProps {
    data: {
        title: string;
        description: string;
        elements: string[];
        image1?: string;
        image2?: string;
        image3?: string;
        image4?: string;
    };
}

export default function Identity({ data }: IdentityProps) {
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
                {data.elements.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {(data.image1 || data.image2 || data.image3 || data.image4) && (
                <div className={styles.imageGrid}>
                    {data.image2 && <img src={data.image2} alt="" />}
                    {data.image3 && <img src={data.image3} alt="" />}
                    {data.image4 && <img src={data.image4} alt="" />}

                    {data.image1 && <img src={data.image1} alt="" />}


                </div>
            )}
        </motion.section>
    );
}
