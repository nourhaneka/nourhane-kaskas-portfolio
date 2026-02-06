
interface ProjectPageProps {
    params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    return <div>Project: {params.slug}</div>;
}
