"use client";

import Hero from "./sections/Hero";
import Challenge from "./sections/Challenge";
import Role from "./sections/Role";
import Process from "./sections/Process";
import Strategy from "./sections/Strategy";
import Results from "./sections/Results";
import Branding from "./sections/Branding";
import styles from "./takyf-case-study.module.css";

export default function TakyfCaseStudy() {
    return (
        <main className={styles.page}>
            <Hero
                data={{
                    title: "Takyf Quotes (التكيُّف)",
                    labels: [
                        "Brand Identity",
                        "Product Design",
                        "Bilingual Typography",
                        "Social Media Design",
                        "Content Strategy"
                    ],
                    summary:
                        "Building a digital sanctuary for curated wisdom through minimalist design and automated quote generation.",
                    overview:
                        "Takyf (meaning 'Adaptation') started as a challenge: How do we bridge the gap between profound Arabic/English literature and modern social media aesthetics? I designed an ecosystem—from a viral Instagram presence to a custom-built web generator—that allows users to create high-end typographic content in seconds.",
                    image: "/images/takyf/hero-showcase.png",
                }}
            />

            <Role
                data={{
                    summary:
                        "I acted as the sole Designer and Strategist, moving from brand concept to a functional web tool.",
                    responsibilities: [
                        "Visual Identity & Logo Design",
                        "Bilingual Typographic Systems (Arabic/English)",
                        "UI/UX Design for the Quote Generator",
                        "Social Media Growth Strategy",
                        "Front-end Design Supervision",
                    ],
                }}
            />

            <Challenge
                data={{
                    label: "Breaking the Frame",
                    description: "The original post style was struggling to survive the algorithm. It was visually restricted by a rigid frame, lacked the depth needed for high-impact social sharing, and failed to meet accessibility standards for contrast.",
                    problems: [
                        "Low contrast: Light backgrounds washed out the primary text, making it unreadable on mobile screens.",
                        "Static Framing: The yellow border felt restrictive and didn't adapt well to Instagram’s 4:5 vertical shift.",
                        "Visual Clutter: Over-reliance on decorative elements (frames/logos) distracted from the weight of the quotes.",
                    ],
                    beforeImage: "/images/takyf/old-framed-style.png",
                    afterImage: "/images/takyf/new-atmospheric-style.png",
                    comparisonLabel: "From Random to Refined"
                }}
            />

            <Branding
                data={{
                    title: "The 'Takyf' Aesthetic",
                    tagline: "Black. White. Wisdom.",
                    summary:
                        "I developed a visual system rooted in 'Zen' minimalism. By stripping away the noise, the focus returns to the bilingual dialogue between Arabic and English.",
                    showcaseImages: [
                        "/images/takyf/branding-system-v2.jpg",
                        "/images/takyf/branding-system-detail.png",
                    ],
                    elements: [
                        {
                            label: "The Palette",
                            text: "High-contrast monochrome to evoke the feel of a classic paperback novel.",
                        },
                        {
                            label: "The Type",
                            text: "A careful balance of weighted Naskh-style Arabic and modern Sans-Serif English.",
                        },
                        {
                            label: "The Grid",
                            text: "A flexible layout designed for the 'saveable' Instagram square.",
                        },
                    ],
                }}
            />
            <Strategy
                data={{
                    summary:
                        "The strategy was 'Design by Subtraction'—removing every element that didn't serve the quote itself.",
                    decisions: [
                        {
                            label: "Typography as Hero",
                            text: "Selected typefaces that treat Arabic and English characters with equal visual weight.",
                        },
                        {
                            label: "Monochromatic Palette",
                            text: "Used a high-contrast black and white theme to evoke the feeling of a classic book.",
                        },
                        {
                            label: "Frictionless Creation",
                            text: "Designed the web tool to eliminate 'choice paralysis' for users creating their own quotes.",
                        },
                    ],
                }}
            />

            <Process
                data={[
                    {
                        step: "01",
                        title: "The Audit & Deconstruction",
                        description: "Stripping away the 'yellow box' and analyzing why the previous light backgrounds caused eye strain.",
                        image: "/images/takyf/process-audit.png",
                    },
                    {
                        step: "02",
                        title: "Bilingual Iteration",
                        description: "Testing three distinct stages of typography—focusing on the scale relationship between Arabic and English scripts.",
                        image: "/images/takyf/process-iteration.jpg",
                    },
                    {
                        step: "03",
                        title: "Final Atmospheric Polish",
                        description: "The 3rd stage of redesign: integrating subtle textures and half-tone patterns to add depth to the high-contrast look.",
                        image: "/images/takyf/process-final.png",
                    },
                ]}
            />

            <Results
                data={{
                    summary:
                        "Takyf evolved from a design experiment into a visually distinct, share-driven brand system.",
                    reels: [
                        "/images/takyf/takyf-reel-iben-kayem.mp4",
                        "/images/takyf/takyf-reel-quote.mp4",
                        "/images/takyf/takyf-reel-quote2.mp4",
                    ],
                    images: [
                        "/images/takyf/websitelayout.png",
                    ],
                    outcomes: [
                        "High engagement and save rates on Instagram reels.",
                        "Consistent brand recognition through a minimal visual system.",
                        "A scalable content layout adaptable to any quote length.",
                    ],
                }}
            />

        </main>
    );
}