"use client";

import Hero from "./sections/Hero";
import Role from "./sections/Role";
import Process from "./sections/Process";
import DesignSystem from "./sections/DesignSystem";
import Strategy from "./sections/Strategy";
import EditorialSystem from "./sections/EditorialSystem";
import Results from "./sections/Results";
import styles from "./tripoli-news-case-study.module.css";

export default function TripoliNewsCaseStudy() {
    return (
        <main className={styles.page}>
            <Hero
                data={{
                    title: "TNN: The Voices Behind the Stories",
                    labels: [
                        "Editorial Design",
                        "Journalist Branding",
                        "Social Media Identity",
                        "Visual Hierarchy"
                    ],
                    summary:
                        "Humanizing news through a sleek, dark-mode editorial system that spotlights the journalists driving the narrative.",
                    overview:
                        "For Tripoli News Network (TNN), I developed a social media identity that moves beyond generic headlines. By creating a 'Profile-First' poster system, we elevated the individual journalists, fostering a deeper sense of trust and personal connection with the Tripoli community.",
                    image1: "/images/tnn/hero-spotlight.png", // Image showing the journalist "cards"
                    image2: "/images/tnn/hero-mobile-feed.png",
                }}
            />

            <Role
                data={{
                    title: "Visual Strategist & Editorial Designer",
                    summary: "My role was to design a system that felt both 'Premium' and 'Urgent.' I moved TNN away from cluttered layouts into a structured, card-based design that gives equal weight to the news headline and the professional identity of the writer.",
                    responsibilities: [
                        "Journalist Profile Branding: Designing a consistent 'Portrait' style for TNN’s leading voices.",
                        "Dark-Mode Editorial System: Implementing a high-contrast black/white/red palette for maximum readability on mobile.",
                        "Dynamic Typography: Balancing bold Arabic headlines with clean, structured metadata.",
                        "Template Scalability: Creating a modular layout that works for short quotes, breaking news, or deep-dive articles.",
                        "Platform-Specific Optimization: Ensuring the posters maintain a 'Premium' feel across Facebook and Instagram feeds."
                    ],
                    image1: "/images/tnn/layout-structure.png", // Image showing the grid or typography
                    image2: "/images/tnn/color-palette.png",
                }}
            />

            <DesignSystem
                data={{
                    title: "The 'Journalist Card' Identity",
                    description: "The core of this project was the creation of the 'Journalist Card.' By using a dark, atmospheric background and framing the journalist with sharp, geometric accents, the design communicates authority. This isn't just news; it's a professional editorial perspective.",
                    focusPoints: [
                        "Signature Red Accents: Using the TNN brand color to highlight key information and create visual flow.",
                        "Portrait Integration: Treating journalist photos with a consistent lighting and color-grading style for brand harmony.",
                        "Informational Balance: Organizing the headline, the journalist's name, and the TNN logo into a fixed, 'Trusted' hierarchy."
                    ],
                    image1: "/images/tnn/before-after-logic.png",
                    image2: "/images/tnn/journalist-gallery.png", // A grid of different journalists
                }}
            />

            <EditorialSystem
                data={{
                    title: "The Human Side of News",
                    description: "News is more credible when you know who is writing it. I developed a system that treats the journalist as a key brand asset. By integrating portraits and writer credits into the posters, we shifted the perception of TNN from a 'faceless news site' to a community of trusted experts.",
                    focusPoints: [
                        "Writer Integration: Using consistent layout logic to feature the journalist without distracting from the headline.",
                        "Subject-Specific Aesthetics: Tailoring the visual tone (colors/textures) to match the article’s category—from hard news to community features.",
                        "The 'Verified' Look: Using clean, bold typography that mimics the weight of a classic newspaper front page."
                    ],
                    image1: "/images/tnn/politics-vs-culture-style.png",
                    image2: "/images/tnn/editorial-poster-gallery.png",
                }}
            />

            <Strategy
                data={{
                    title: "Strategy: Authority Through Design",
                    description: "In an era of misinformation, professional design acts as a 'Trust Signal.' My strategy was to use bold, newspaper-inspired typography and high-end portraits to signal to the audience that TNN is a verified, high-quality source of truth in Tripoli.",
                    points: [
                        "Personalized News: Shifting the focus from 'Faceless News' to 'Expert Opinion'.",
                        "Visual Consistency: Ensuring that every post, regardless of the topic, is instantly recognizable as TNN content.",
                        "Mobile-First Legibility: Optimizing font weights and contrast ratios for readers scrolling quickly through social feeds."
                    ],
                    image1: "/images/tnn/feed-mockup.png",
                    image2: "/images/tnn/engagement-results.png",
                }}
            />

            <Process
                data={[
                    {
                        step: "01",
                        title: "Visual Audit",
                        description: "Analyzing the news landscape to create a dark-mode aesthetic that stands out against the typical light-colored news feeds.",
                        image: "/images/tnn/process-01.png",
                    },
                    {
                        step: "02",
                        title: "The Grid Logic",
                        description: "Defining the 'Card' geometry—allocating space for the portrait, the quote, and the brand identifiers.",
                        image: "/images/tnn/process-02.png",
                    },
                    {
                        step: "03",
                        title: "Bilingual Polish",
                        description: "Refining the Arabic typography to ensure headlines have 'weight' and authority while remaining clean.",
                        image: "/images/tnn/process-03.png",
                    },
                ]}
            />

            <Results
                data={{
                    summary:
                        "The redesign of the article posters led to a more cohesive and authoritative digital presence for Tripoli News.",
                    outcomes: [
                        "Higher engagement on editorial pieces featuring journalist spotlights.",
                        "Increased 'shares' as users found the posters more professional and 'news-worthy.'",
                        "A streamlined design workflow that allowed the newsroom to post high-quality content faster.",
                    ],
                }}
            />
        </main>
    );
}