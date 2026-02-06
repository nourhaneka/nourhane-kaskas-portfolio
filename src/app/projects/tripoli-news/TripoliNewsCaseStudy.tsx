"use client";

import Hero from "./sections/Hero";
import Role from "./sections/Role";
import Process from "./sections/Process";
import Strategy from "./sections/Strategy";
import EditorialSystem from "./sections/EditorialSystem";
import Results from "./sections/Results";
import styles from "./tripoli-news-case-study.module.css";

export default function TripoliNewsCaseStudy() {
    return (
        <main className={styles.page}>
            <Hero
                data={{
                    title: "Tripoli News Network (TNN)",
                    labels: [
                        "Editorial Design",
                        "Journalistic Branding",
                        "Social Media Strategy",
                        "Information Hierarchy"
                    ],
                    summary:
                        "Bridging the gap between traditional journalism and digital-first consumption through bespoke editorial branding.",
                    overview:
                        "Working with Tripoli's primary news outlet, I transformed daily headlines into high-impact social media assets. My goal was to move away from generic news templates and create a system where the subject of the article and the voice of the journalist work in visual harmony.",
                    image1: "/images/tnn/hero-editorial-spread.png",
                    image2: "/images/tnn/hero-social-presence.png",
                }}
            />

            <Role
                data={{
                    title: "Editorial Art Director",
                    summary: "In a fast-paced news environment, I served as the bridge between raw reporting and visual storytelling. I was responsible for ensuring that every piece of news—whether political, social, or cultural—carried the weight and authority of the TNN brand.",
                    responsibilities: [
                        "Bespoke Article Poster Design: Creating unique visual hooks for high-priority editorial pieces.",
                        "Journalist Spotlights: Designing layouts that highlight the writer, building authority and trust for each story.",
                        "Brand Stewardship: Maintaining strict adherence to TNN's visual identity while modernizing its digital presence.",
                        "Rapid Response Workflow: Delivering high-quality design assets at the speed of a 24-hour news cycle.",
                        "Visual Hierarchy Management: Organizing headlines, sub-headers, and credits for instant legibility on mobile devices."
                    ],
                    image1: "/images/tnn/behind-the-design.png",
                    image2: "/images/tnn/journalist-highlight-template.png",
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
                    title: "Strategy: Clarity Over Clutter",
                    description: "In the noisy environment of a social media feed, news needs to 'stop the scroll.' My strategy focused on high-contrast layouts and a 'No-Fluff' design approach. By prioritizing the headline and a single, powerful image, we ensured the core message was delivered in under 2 seconds.",
                    points: [
                        "Stop-the-Scroll Typography: Scaling headlines for maximum impact on small screens.",
                        "Brand Consistency: Ensuring that regardless of the subject, the TNN identity remains the dominant visual force.",
                        "Platform Optimization: Designing specific aspect ratios for Facebook (where TNN has a massive following) and Instagram Stories."
                    ],
                    image1: "/images/tnn/analytics-impact.png",
                    image2: "/images/tnn/mobile-feed-preview.png",
                }}
            />

            <Process
                data={[
                    {
                        step: "01",
                        title: "Content Synthesis",
                        description: "Distilling long-form articles into a single, powerful visual hook and a compelling headline.",
                        image: "/images/tnn/process-synthesis.png",
                    },
                    {
                        step: "02",
                        title: "Bespoke Illustration/Curation",
                        description: "Selecting or editing imagery that reflects the gravity or the mood of the specific news subject.",
                        image: "/images/tnn/process-curation.png",
                    },
                    {
                        step: "03",
                        title: "Editorial Polish",
                        description: "Applying the final TNN branding layers and journalist credits for a verified, news-ready finish.",
                        image: "/images/tnn/process-final.png",
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