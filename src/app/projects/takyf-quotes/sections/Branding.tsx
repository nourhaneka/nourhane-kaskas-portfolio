"use client";

import { motion } from "framer-motion";
import styles from "../takyf-case-study.module.css";

interface BrandingElement {
    label: string;
    text: string;
}

interface BrandingProps {
    data: {
        title: string;
        tagline: string;
        summary: string;
        showcaseImages?: string[]; // 👈 UPDATED
        elements: BrandingElement[];
    };
}

export default function Branding({ data }: BrandingProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>{data.title}</h2>
            <p className={styles.tagline}>{data.tagline}</p>
            <p>{data.summary}</p>

            {data.showcaseImages && (
                <div className={styles.brandingShowcase}>
                    {data.showcaseImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${data.title} showcase ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            <div className={styles.brandingGrid}>
                {data.elements.map((el, i) => (
                    <div key={i} className={styles.brandingItem}>
                        <h4>{el.label}</h4>
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
