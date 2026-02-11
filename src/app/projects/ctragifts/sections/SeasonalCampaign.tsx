"use client";


import { motion } from "framer-motion";
import styles from "../ctragifts-case-study.module.css";


interface SeasonalCampaignProps {
    data: {
        title: string;
        description: string;
        details: string[];
        image: string;
        video: string;
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


            <div className={styles.seasonalMedia}>
                <motion.img src={data.image} alt="Ramadan series" whileHover={{ scale: 1.04 }} />
                <motion.video
                    src={data.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    whileHover={{ scale: 1.03 }}
                />
            </div>
        </motion.section>
    );
}