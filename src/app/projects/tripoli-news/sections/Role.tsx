"use client";

import { motion } from "framer-motion";
import styles from "../tripoli-news-case-study.module.css";

interface RoleProps {
    data: {
        summary: string;
        responsibilities: string[];
    };
}

export default function Role({ data }: RoleProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>My Role</h2>
            <p>{data.summary}</p>

            <ul className={styles.roleList}>
                {data.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </motion.section>
    );
}
