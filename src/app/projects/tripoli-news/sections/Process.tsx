"use client";

import styles from "../tripoli-news-case-study.module.css";

interface ProcessItem {
    step: string;
    title: string;
    description: string;
    image: string;
}

export default function Process({ data }: { data: ProcessItem[] }) {
    return (
        <section className={styles.section}>
            <h2>Process</h2>

            <div className={styles.processStack}>
                {data.map((p) => (
                    <div key={p.step} className={styles.processRow}>
                        <div>
                            <span className={styles.step}>{p.step}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                        </div>
                        <img src={p.image} />
                    </div>
                ))}
            </div>
        </section>
    );
}
