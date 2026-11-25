import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-20">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-foreground/60">{site.role}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m {site.name}.
        </h1>
        <p className="mt-4 text-lg text-foreground/70">{site.tagline}</p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            See projects
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
          >
            Get in touch
          </a>
        </div>
      </section>

      {featured.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">Featured projects</h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-foreground/70">
          The best way to reach me is email:{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
