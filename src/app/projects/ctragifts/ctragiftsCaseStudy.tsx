"use client";

import Hero from './sections/Hero';
import Role from './sections/Role';
import VisualStorytelling from './sections/VisualStorytelling';
import SeasonalCampaign from './sections/SeasonalCampaign';
import Strategy from './sections/Strategy';
import BrandIdentity from './sections/BrandIdentity';
import Results from './sections/Results';
import styles from "./ctragifts-case-study.module.css";

export default function CtragiftsCaseStudy() {
    return (
        <main className={styles.page}>
            <Hero
                data={{
                    title: "Ctra Gifts: A Modest Lifestyle",
                    labels: [
                        "Creative Direction",
                        "Content Strategy",
                        "Photography",
                        "Social Media Design",
                    ],
                    summary:
                        "Elevating an artisanal Islamic gift brand through sensory storytelling and seasonal content campaigns.",
                    overview:
                        "At Ctra Gifts, my mission was to weave together diverse product lines—from modest fashion to traditional Lebanese 'Moone'—into a single, cohesive brand narrative. I acted as the lead content creator, capturing the textures, traditions, and spirit of the brand for a growing digital audience.",
                    image1: "/images/ctra/hero-lifestyle.jpg",
                }}
            />
            <Role
                data={{
                    title: "Visual Storyteller & Content Lead",
                    summary: "As the lead creative for Ctra Gifts, I acted as a one-person production house. My goal was to bridge the gap between traditional artisanal products and modern digital consumption, ensuring that every frame captured the 'Modest' elegance the brand stands for.",
                    responsibilities: [
                        "Creative Direction & Product Styling: Designing the visual 'sets' for soaps, moone, and clothing to evoke a premium, handmade feel.",
                        "End-to-End Video Production: Scripting, filming, and editing short-form content and the 'Ramadan Preparation' series.",
                        "High-Impact Product Photography: Capturing the intricate details of crochet work and the textures of modest fabrics.",
                        "Graphic Design & Occasional Posters: Creating bespoke digital assets for Eid, Ramadan, and special brand announcements.",
                        "Content Strategy: Organizing the rollout of media to build a consistent and trustworthy brand presence."
                    ],
                }}
            />

            <BrandIdentity
                data={{
                    title: "Visual Identity System",
                    description: "Beyond content creation, I shaped a recognizable visual system that made Ctra instantly identifiable.",
                    points: [
                        "Earth-toned, modest color palette",
                        "Soft natural lighting language",
                        "Handcrafted texture focus",
                        "Warm, calm typography mood",
                        "Spiritual calm aesthetic"
                    ],
                    image1: "/images/ctra/brand-1.jpg",
                    image2: "/images/ctra/brand-2.jpg",
                    image3: "/images/ctra/brand-3.jpg",
                    image4: "/images/ctra/brand-4.jpg",
                    image5: "/images/ctra/brand-5.jpg",
                    image6: "/images/ctra/brand-6.jpg",
                }}
            />

            <VisualStorytelling
                data={{
                    title: "Sensory Content Creation",
                    description: "Capturing products like traditional soap, honey, and crochet requires more than just a camera; it requires an eye for texture. I focused on making the audience 'feel' the products through the screen—the softness of the crochet, the scent of the rose water, and the flow of the modest clothing.",
                    focusPoints: [
                        "Product Cinematography: Creating short-form videos that highlight the movement and quality of the fabric.",
                        "Organic Textures: Using natural lighting to emphasize the 'Hand-made' quality of the soaps and Moone items.",
                        "Visual Harmony: Balancing diverse products (clothing vs. food) through a consistent color grade and 'homey' styling."
                    ],
                    image1: "/images/ctra/moone-product-shot-2.jpg",
                    image2: "/images/ctra/moone-product-shot.jpg",

                }}
            />

            <SeasonalCampaign
                data={{
                    title: "The Ramadan Series: Cultural Preparation",
                    description: "I conceptualized and produced a dedicated content series for Ramadan. This wasn't just about selling; it was about building a bond with the community by sharing the beauty of preparation—blending the spiritual significance of the month with the artisanal gifts Ctra offers.",
                    details: [
                        "Lifestyle Series: A sequence of videos/stills focusing on the ritual of preparation.",
                        "Occasional Posters: Designed bespoke graphics for Eid and Ramadan announcements that maintained the brand's 'Modest' elegance.",
                        "Community Engagement: Creating content that felt like a gift to the follower, not just an advertisement."
                    ],
                    video: "/images/ctra/video-2.mp4",
                    image: "/images/ctra/Ramadan-collection.png",
                }}
            />

            <Strategy
                data={{
                    title: "Content Strategy & Impact",
                    description: "Moving away from static e-commerce shots, I implemented a 'Story-First' strategy. By showing the products in use—a crochet keychain on a bag, or honey being served—we increased the perceived value of the brand.",
                    points: [
                        "Authenticity over Perfection: Using real-life settings to make the brand feel accessible and trustworthy.",
                        "Visual Consistency: Ensuring that posters and videos shared the same typographic soul and color palette.",
                        "Multi-Format Delivery: Designing specifically for Reels, Stories, and high-impact Feed posters."
                    ],
                    image1: "/images/ctra/instagram-poster.jpg",
                    image2: "/images/ctra/instagram-poster-2.jpg",
                    image3: "/images/ctra/eid-poster-design.jpg",
                }}
            />
            <Results
                data={{
                    summary: "Ctra Gifts evolved from a product-based page into a lifestyle-driven brand identity, creating emotional connection rather than transactional engagement.",
                    outcomes: [
                        "Stronger brand recognition through consistent visual language",
                        "Higher engagement on Reels and Stories formats",
                        "Clear positioning as a 'Modest Lifestyle' brand, not just a gift shop",
                        "Community trust built through cultural and seasonal storytelling"
                    ],
                    reels: [
                        "/images/ctra/video-1.mp4",
                        "/images/ctra/video-7.mp4",
                        "/images/ctra/video-6.mp4",
                        "/images/ctra/video-4.mp4",
                        "/images/ctra/video-5.mp4",
                        "/images/ctra/video-8.mp4"
                    ],
                    images: [
                        "/images/ctra/feed-1.png",
                        "/images/ctra/feed-2.png",
                        "/images/ctra/feed-5.png",
                    ]
                }}
            />


        </main>
    );
}