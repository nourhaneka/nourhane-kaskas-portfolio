"use client";
import { motion } from "framer-motion";
import styles from "../takyf-case-study.module.css";


interface StrategyDecision {
    label: string;
    text: string;
}


interface StrategyProps {
    data: {
        summary: string;
        decisions: StrategyDecision[];
    };
}


export default function Strategy({ data }: StrategyProps) {
    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Strategy</h2>
            <p>{data.summary}</p>


            <ul className={styles.strategyList}>
                {data.decisions.map((decision, i) => (
                    <li key={i}>
                        <strong>{decision.label}:</strong> {decision.text}
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}