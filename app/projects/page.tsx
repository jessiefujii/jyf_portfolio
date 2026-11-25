import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { categories, projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-2 text-foreground/70">
        Each project links to a case study covering the question, approach and
        result.
      </p>

      <div className="mt-10 space-y-14">
        {categories.map((category) => {
          const items = projects.filter((p) => p.category === category.id);
          if (items.length === 0) return null;
          return (
            <section key={category.id} id={category.id}>
              <h2 className="text-xl font-semibold">{category.label}</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
