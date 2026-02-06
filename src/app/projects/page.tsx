import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section>
            {projects.map((project, index) => (
                <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                >
                    <article>
                        <span>0{index + 1}</span>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </article>
                </Link>
            ))}
        </section>
    );
}
