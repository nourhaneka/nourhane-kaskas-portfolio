"use client";

import Hero from "./sections/Hero";
import Challenge from "./sections/Challenge";
import Role from "./sections/Role";
import Process from "./sections/Process";
import Identity from "./sections/Identity";
import PrintingPackaging from "./sections/PrintingPackaging";
import Strategy from "./sections/Strategy";
import Results from "./sections/Results";
import styles from "./tripolium-case-study.module.css";

export default function TripoliumCaseStudy() {
    return (
        <main className={styles.page}>
            <Hero
                data={{
                    title: "Tripolium Center",
                    labels: ["Heritage Branding", "Photography ", "Social Media Visuals", "Content Strategy", "Print & Packaging"],
                    summary: "Developing a brand identity rooted in the Latin name of Tripoli (Tripolium), blending educational modernism with the rich Mamluk and Ottoman architectural heritage of the city.",
                    overview: "The Tripolium Center is more than an educational hub; it’s a tribute to the city it calls home. My work focused on creating a visual language that speaks the language of Tripoli—incorporating its iconic mosque silhouettes into seasonal campaigns and building a bridge between traditional Arabic culture and modern education.",
                    image1: "/images/tripolium/hero-main1.png",
                }}
            />

            <Role
                data={{
                    summary:
                        "I served as the Lead Creative, managing everything from the digital screen to the physical print shop floor.",
                    responsibilities: [
                        "Bespoke Ramadan & Eid Packaging Design",
                        "On-site Photography & Videography of students",
                        "Print Production Management (Stickers & Flex Banners)",
                        "Social Media Story Frameworks",
                        "Environmental Graphic Design",
                    ],
                }}
            />
            <Identity
                data={{
                    title: "The Tripolium Identity",
                    description: "The name 'Tripolium' itself pays homage to the city's history. I focused on a brand system that feels authentic to Tripoli’s residents. During Ramadan and Eid, the posters didn't just use generic icons; they featured the specific silhouettes of Tripoli’s historic mosques, creating an immediate emotional bond with the local community.",
                    elements: [
                        "Architectural Integration: Using local mosque silhouettes in the Ramadan calendar and posters.",
                        "Bilingual Sophistication: A typography system that respects Arabic calligraphic roots while remaining clean and readable.",
                        "Cultural Resonance: A color palette inspired by the stone and spirit of the 'Old City'."
                    ],
                    image1: "/images/tripolium/Ramadan tripolium Brand stickers.png",
                    image2: "/images/tripolium/tripolium Brand Visual Identity.png",
                    image3: "/images/tripolium/logo diffrent design.png",
                    image4: "/images/tripolium/tripolium Grade Rate Brand stickers.png",
                }}
            />
            <Challenge
                data={{
                    label: "The Cross-Generational Bridge",
                    description: "Educational design often falls into the trap of being 'too childish' (which loses parent trust) or 'too corporate' (which bores students). The mission was to find the middle ground.",
                    problems: [
                        "Dual-Targeting: Communicating professionalism to adults while maintaining visual appeal for children.",
                        "Media Variety: Maintaining brand consistency across digital story templates, physical stickers, and 3-meter flex banners.",
                        "The Print Gap: Ensuring vibrant digital designs translated accurately into high-quality physical print production.",
                    ],
                    // Highlighting the shift from generic to professional
                    image: "/images/tripolium/initial-concept.png",
                    video: "/images/tripolium/final-identity.mp4",
                    video2: "/images/tripolium/final-identity2.mp4",

                }}
            />

            <PrintingPackaging
                data={{
                    title: "Tactile Branding: From Screen to Street",
                    description: "Education is a physical experience. I designed and managed the production of everything from small-scale stickers for student rewards to 3-meter flex banners for the center's facade. The highlight was the seasonal packaging—creating Eid gift boxes and Ramadan calendars that students were proud to take home.",
                    details: [
                        "Seasonal Packaging: Custom-designed boxes and bags for Eid and Ramadan gifts.",
                        "Environmental Graphics: Large-scale flex banners designed for high visibility without looking cluttered.",
                        "Print Precision: Managing die-cut sticker production and color-accurate printing for a premium feel."
                    ],
                    image1: "/images/tripolium/flex.png",
                    image2: "/images/tripolium/gift-Custum-photo.png",
                    video1: "/images/tripolium/Eid-Gift-transation.mp4",
                    video2: "/images/tripolium/gift-Eid.mp4",

                }}
            />

            <Strategy
                data={{
                    title: "Strategy: Building Confidence & Connection",
                    description: "The challenge was attracting parents while exciting students. My strategy focused on 'The Bond.' Through student photography and videography, we showed the human side of the center. By showcasing real progress and authentic Tripoli culture, we built a level of trust that generic stock-photo designs never could.",
                    points: [
                        "Social Proof: High-quality photography of real students to build parent confidence.",
                        "Seasonal Storytelling: Using the Ramadan calendar as a daily touchpoint for the brand.",
                        "Community Engagement: Creating content that celebrates Tripoli's local identity to foster loyalty."
                    ],
                }}
            />
            <Process
                data={[
                    {
                        step: "01",
                        title: "Asset Diversification",
                        description: "Creating a library of story templates and posters that allow for quick event announcements without losing brand quality.",
                        image: "/images/tripolium/story-template.png",
                    },
                    {
                        step: "02",
                        title: "The Human Element",
                        description: "Capturing live sessions through photography to showcase the center's true environment and student engagement.",
                        image: "/images/tripolium/process-photo.png",
                    },
                    {
                        step: "03",
                        title: "Scale & Production",
                        description: "Adapting digital identities for large-scale flex printing and intricate sticker die-cuts for Ramadan packaging.",
                        image: "/images/tripolium/flex.png",
                    },
                ]}
            />

            <Results
                data={{
                    summary:
                        "The result was a unified brand presence that elevated Tripolium Center’s perception in the local educational market.",
                    reels: [
                        "/images/tripolium/tripolium-reel-1.mp4",
                        "/images/tripolium/tripolium-reel-2.mp4",
                        "/images/tripolium/tripolium-reel-3.mp4",
                    ],
                    outcomes: [
                        "Increased parent engagement through professional, clear communication.",
                        "Successful rollout of physical seasonal branding (Ramadan/Eid) that enhanced student delight.",
                        "High-quality environmental graphics (Flex banners) that improved the center's physical presence.",
                    ],
                }}
            />
        </main>
    );
}