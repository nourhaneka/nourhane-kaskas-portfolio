"use client";

import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    return (
        <main className={styles.page}>

            {/* Header */}
            <section className={styles.hero}>
                <div className={styles.heroTop}>
                    <button
                        onClick={() => router.back()}
                        className={styles.back}
                        aria-label="Go back"
                    >
                        ←
                    </button>

                    <h1 className={styles.headline}>
                        I bridge the gap between the quiet wisdom of a quote
                        and the loud urgency of the news.
                    </h1>
                </div>
            </section>

            {/* Story */}
            <section className={styles.section}>
                <div className={styles.story}>
                    <div className={styles.text}>
                        <p>
                            Based in the heart of Tripoli, Lebanon, I work at the intersection
                            of heritage and modernism. My work isn’t tied to a medium — it’s tied
                            to one goal: <strong>adaptation.</strong>
                        </p>

                        <p>
                            From newsrooms to lifestyle brands, I focus on how design makes people
                            feel before they even read.
                        </p>

                        <p className={styles.quote}>
                            Good design is a handshake — firm, memorable, and authentic.
                        </p>

                        <p>
                            I help brands speak the language of their community through culture,
                            rhythm, and visual clarity.
                        </p>
                    </div>

                    <div className={styles.imageWrap}>
                        <Image
                            src="/about/bts.jpg"
                            alt="Behind the scenes"
                            width={600}
                            height={800}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className={styles.section}>
                <h2 className={styles.subtitle}>What I Do</h2>

                <div className={styles.pillars}>
                    <div>
                        <h3>Brand Strategy</h3>
                        <p>Building identities rooted in local culture.</p>
                    </div>

                    <div>
                        <h3>Content Storytelling</h3>
                        <p>Photography, video, and social systems.</p>
                    </div>

                    <div>
                        <h3>Visual Systems</h3>
                        <p>Designing for fast digital environments.</p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className={styles.section}>
                <h2 className={styles.subtitle}>Philosophy</h2>

                <ul className={styles.philosophy}>
                    <li><strong>Design by Subtraction</strong> — Only what matters stays.</li>
                    <li><strong>Bilingual Rhythm</strong> — Arabic & English as equals.</li>
                    <li><strong>Local Soul, Global Standard</strong> — Built in Tripoli, made for the world.</li>
                </ul>
            </section>

            {/* Human */}
            <section className={styles.section}>
                <h2 className={styles.subtitle}>Human Side</h2>

                <ul className={styles.human}>
                    <li>Finding shadows in the old city.</li>
                    <li>Documenting street typography.</li>
                    <li>Coffee + React components.</li>
                </ul>
            </section>

        </main>
    );
}