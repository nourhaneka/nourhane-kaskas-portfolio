"use client";

import React, { JSX, useEffect, useState } from "react";
import styles from "./contact.module.css";

/* ================= TYPES ================= */

type Service =
    | "Branding"
    | "Content Creation"
    | "Social Media Strategy"
    | "Web Design";

interface FormData {
    name: string;
    email: string;
    selectedServices: Service[];
    projectDescription: string;
    timeline: string;
}

interface TimeState {
    hours: string;
    minutes: string;
    seconds: string;
}

interface ValidationErrors {
    name?: string;
    email?: string;
    projectDescription?: string;
}

type StatusState = "idle" | "submitting" | "success" | "error";

/* ================= COMPONENT ================= */

export default function ProjectInquiry() {
    /* ===== Services ===== */
    const servicesList: Service[] = [
        "Branding",
        "Content Creation",
        "Social Media Strategy",
        "Web Design",
    ];

    /* ===== Form State ===== */
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        selectedServices: [],
        projectDescription: "",
        timeline: "",
    });

    /* ===== Clock State ===== */
    const [time, setTime] = useState<TimeState>({
        hours: "",
        minutes: "",
        seconds: "",
    });

    /* ===== Validation State ===== */
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
        {}
    );

    /* ===== Submission State ===== */
    const [status, setStatus] = useState<StatusState>("idle");

    /* ================= REAL-TIME CLOCK ================= */

    useEffect(() => {
        const timer = setInterval(() => {
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Beirut",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });

            const parts = formatter.formatToParts(new Date());

            const get = (type: Intl.DateTimeFormatPartTypes) =>
                parts.find((p) => p.type === type)?.value ?? "";

            setTime({
                hours: get("hour"),
                minutes: get("minute"),
                seconds: get("second"),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    /* ================= HANDLERS ================= */

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleService = (service: Service): void => {
        setFormData((prev) => {
            const exists = prev.selectedServices.includes(service);

            return {
                ...prev,
                selectedServices: exists
                    ? prev.selectedServices.filter((s) => s !== service)
                    : [...prev.selectedServices, service],
            };
        });
    };

    /* ================= VALIDATION ================= */

    const validate = (): ValidationErrors => {
        const errors: ValidationErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            errors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email format.";
        }

        if (!formData.projectDescription.trim()) {
            errors.projectDescription = "Project description is required.";
        }

        return errors;
    };

    /* ================= SUBMISSION ================= */

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const errors = validate();
        setValidationErrors(errors);

        if (Object.keys(errors).length > 0) return;

        try {
            setStatus("submitting");

            // Simulated API call
            await new Promise<void>((resolve) => setTimeout(resolve, 2000));

            const payload = {
                ...formData,
                sentAt: {
                    timezone: "Asia/Beirut",
                    time: `${time.hours}:${time.minutes}:${time.seconds}`,
                },
            };

            console.log(
                "Project Inquiry Submission:",
                JSON.stringify(payload, null, 2)
            );

            setStatus("success");
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
        }
    };

    /* ================= SUCCESS VIEW ================= */

    if (status === "success") {
        return (
            <section className={styles.section}>
                <output role="status" aria-live="polite">
                    <h2>Inquiry Sent Successfully</h2>
                    <p>Your project inquiry has been received. I’ll be in touch soon.</p>
                </output>
            </section>
        );
    }

    /* ================= FORM VIEW ================= */

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>

                    <header className={styles.header}>
                        <h1 className={styles.title}>Project Inquiry</h1>
                        <p className={styles.clock}>
                            Tripoli Time: {time.hours}:{time.minutes}:{time.seconds}
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} noValidate className={styles.form}>
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input
                                className={styles.input}
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={!!validationErrors.name}
                                aria-describedby={validationErrors.name ? "name-error" : undefined}
                            />
                            {validationErrors.name && (
                                <span id="name-error" role="alert">
                                    {validationErrors.name}
                                </span>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input
                                className={styles.input}
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!validationErrors.email}
                                aria-describedby={validationErrors.email ? "email-error" : undefined}
                            />
                            {validationErrors.email && (
                                <span id="email-error" role="alert">
                                    {validationErrors.email}
                                </span>
                            )}
                        </div>

                        {/* Services */}
                        <fieldset className={styles.services}>
                            <legend className={styles.label}>Services</legend>

                            {servicesList.map((service) => {
                                const active = formData.selectedServices.includes(service);

                                return (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => toggleService(service)}
                                        aria-pressed={active}
                                        className={`${styles.pill} ${active ? styles.pillActive : ""}`}
                                    >
                                        {service}
                                    </button>
                                );
                            })}
                        </fieldset>


                        {/* Project Description */}
                        <div>
                            <label htmlFor="projectDescription" className={styles.label}>Project Description</label>
                            <textarea
                                className={styles.textarea}
                                id="projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                aria-invalid={!!validationErrors.projectDescription}
                                aria-describedby={
                                    validationErrors.projectDescription
                                        ? "description-error"
                                        : undefined
                                }
                            />
                            {validationErrors.projectDescription && (
                                <span id="description-error" role="alert">
                                    {validationErrors.projectDescription}
                                </span>
                            )}
                        </div>

                        {/* Timeline */}
                        <div>
                            <label htmlFor="timeline" className={styles.label}>Project Timeline</label>
                            <input
                                className={styles.input}
                                id="timeline"
                                name="timeline"
                                type="text"
                                value={formData.timeline}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit */}
                        <div>
                            <button type="submit" disabled={status === "submitting"} className={styles.submit}>
                                {status === "submitting" ? "Sending..." : "Send Inquiry"}
                            </button>

                            {status === "error" && (
                                <output role="alert" className={styles.error}>
                                    Submission failed. Please try again.
                                </output>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
}
