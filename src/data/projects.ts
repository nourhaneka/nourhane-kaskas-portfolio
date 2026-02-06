export type ProjectContent = {
    hero: {
        intro: string;
        snapshot: { label: string; value: string }[];
    };
    context: string[];
    brand: {
        personality: string;
        logo: { src: string; alt: string };
        colors: string;
        typography: string;
        instagramViewNote: string;
    };
    contentStrategy: {
        targetAudience: string;
        pillars: string[];
        tone: string;
        formats: string[];
        systemNote: string;
    };
    postGrid: {
        layout: string;
        hierarchy: string;
        image?: { src: string; alt: string };
    };
    motion: {
        purpose: string;
        reelsStructure: string;
        animationStyle: string;
        templateNote: string;
        video?: { src: string; poster?: string };
    };
    webApp: {
        description: string;
        uxUiNote: string;
        techStack: string;
        seoNote: string;
        image?: { src: string; alt: string };
    };
    process: string[];
    results: string[];
    cta: string[];
};

export type Project = {
    number: string;
    title: string;
    tags: string[];
    slug: string;
    image: string;
    description: string;
    content: ProjectContent;
};

export const projects: Project[] = [
    {
        number: "01",
        title: "Takyf Quotes - Social Brand Visual Identity",
        tags: ["Branding", "Social Media Design", "Content Strategy"],
        slug: "takyf-quotes",
        image: "/images/front-page-images/front-page-logo.png",
        description:
            "Designed a cohesive visual system and content structure.",
        content: {
            hero: {
                intro:
                    "Takyf Quote is a quote-based social brand delivering motivational, punchy, and visually engaging content on Instagram, supported by a quote generator web app.",
                snapshot: [
                    { label: "Role", value: "Brand Designer, Content Designer, Motion Designer, UI/UX Designer, Front-end Developer" },
                    { label: "Deliverables", value: "Logo, Visual Identity, Instagram Content & Reels, Website / Quote Generator App" },
                    { label: "Timeline", value: "[Insert Timeline]" },
                    { label: "Tools", value: "Figma, Photoshop, After Effects, React, Next.js, Tailwind CSS, Vercel" },
                ],
            },
            context: [
                "Many quote pages lack cohesion and visual identity.",
                "I created Takyf Quote as a personal project to build a recognizable, consistent quote brand.",
                "Project goals: Build a recognizable quote brand, create consistent Instagram content system, use video to engage, develop quote generator web app."
            ],
            brand: {
                personality: "Modern, approachable, inspiring.",
                logo: { src: "/images/takyf-logo.png", alt: "Takyf Quotes Logo" },
                colors: "Minimal yet vibrant palette conveying energy and positivity",
                typography: "Readable on mobile screens, optimized for Instagram feed",
                instagramViewNote: "Designed with Instagram profile and feed layout in mind"
            },
            contentStrategy: {
                targetAudience: "Motivated individuals seeking inspiration",
                pillars: ["Motivation", "Self-love", "Productivity", "Short punchy lines"],
                tone: "Simple, direct, non-cliché",
                formats: ["Static posts", "Carousels", "Reels", "Stories"],
                systemNote: "Systematic approach ensures consistent feed"
            },
            postGrid: {
                layout: "Reusable templates: centered/left-aligned quotes, minimal text-only posts, subtle graphic elements",
                hierarchy: "Hierarchy, spacing, and contrast maximize readability",
                image: { src: "/images/takyf-feed.png", alt: "Takyf Instagram Feed Layout" }
            },
            motion: {
                purpose: "Bring quotes to life and increase engagement",
                reelsStructure: "Hook → Main message → CTA (follow/save/share)",
                animationStyle: "Smooth text reveals, subtle movements, on-brand transitions",
                templateNote: "Created motion templates to speed up future content production",
                video: { src: "/videos/takyf-reel.mp4", poster: "/images/takyf-reel-thumbnail.png" }
            },
            webApp: {
                description: "Quote generator web app matching Instagram brand",
                uxUiNote: "Designed UX, wireframes, and final UI; responsive, mobile-first",
                techStack: "React, Next.js, Tailwind CSS, Vercel",
                seoNote: "Semantic headings, keyword-rich content for SEO",
                image: { src: "/images/takyf-webapp.png", alt: "Takyf Quote Generator Web App" }
            },
            process: [
                "Research → Concept → Branding → Content System → UI Design → Development → Iteration",
                "Strategic thinking followed by systematic design for scalability",
                "Tested posts in actual feed and adjusted designs for real-world use"
            ],
            results: [
                "Initial metrics: [Insert followers/engagement/traffic]",
                "Qualitative impact: cohesive brand, efficient content production, proof of end-to-end capabilities"
            ],
            cta: [
                "Develop cohesive visual identities for social brands",
                "Create scalable content systems for Instagram & web",
                "Design motion templates for efficient video content",
                "Build responsive web apps consistent with brand identity",
                "Contact me to bring your project to life"
            ]
        }
    },
    // Other projects can follow the same structure
];
