import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

// Used by both the home page (featured) and the /projects grid.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-foreground/10 transition hover:border-foreground/30"
    >
      <div className="relative aspect-[16/10] bg-foreground/5">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-semibold">{project.title}</h3>
          <span className="text-xs text-foreground/50">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-foreground/70">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded bg-foreground/5 px-2 py-0.5 font-mono text-xs text-foreground/70"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
