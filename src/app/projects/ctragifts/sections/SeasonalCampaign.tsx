"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface SeasonalCampaignProps {
    data: {
        title: string;
        description: string;
        details: string[];
        image1: string;
        image2: string;
    };
}


export default function SeasonalCampaign({ data }: SeasonalCampaignProps) {
    return (
        <motion.section
            className={`${styles.section} ${styles.seasonal}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2>{data.title}</h2>
            <p>{data.description}</p>


            <ul className={styles.list}>
                {data.details.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>


            <div className={styles.mediaSplit}>
                <motion.img src={data.image1} alt="Ramadan series" whileHover={{ scale: 1.04 }} />
                <motion.img src={data.image2} alt="Eid poster" whileHover={{ scale: 1.04 }} />
            </div>
        </motion.section>
    );
}