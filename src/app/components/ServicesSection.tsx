"use client";

import "./ServicesSection.css";

export default function WhatIDo() {
    const cards = [
        {
            title: "Brand Identity",
            desc: "Building clear, recognizable visual identities that scale across platforms.",
            color: "var(--page-bg-a)",
            z: 1,
            top: "0px",
            rotate: "4deg",
        },
        {
            title: "Visual Systems",
            desc: "Designing consistent systems that keep brands coherent over time.",
            color: "var(--page-bg-b)",
            z: 2,
            top: "22px",
            rotate: "-3deg",
        },
        {
            title: "Content Design",
            desc: "Crafting layouts and visuals that communicate fast and clearly.",
            color: "var(--page-bg-c)",
            z: 3,
            top: "44px",
            rotate: "2deg",
        },
        {
            title: "Motion & Interaction",
            desc: "Subtle motion that adds clarity, hierarchy, and polish.",
            color: "#eceef3",
            z: 4,
            top: "66px",
            rotate: "-2deg",
        },
    ];

    return (
        <section className="what-i-do">
            <div className="what-i-do__inner">
                {/* LEFT — text */}
                <div className="what-i-do__text">
                    <span className="label">WHAT I DO</span>
                    <p className="description">
                        I help brands and products communicate clearly through thoughtful
                        design and consistent visual systems.
                    </p>
                </div>

                {/* RIGHT — stacked cards */}
                <div className="what-i-do__cards">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="card"
                            style={{
                                background: card.color,
                                transform: `rotate(${card.rotate})`,
                            }}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
