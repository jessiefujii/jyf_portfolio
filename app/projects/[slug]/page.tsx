import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProject, projects } from "@/content/projects";

// Prerender one page per entry in content/projects.ts at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: project.title, description: project.summary }
    : {};
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  // With cacheComponents on, `dynamicParams = false` isn't allowed,
  // so unknown slugs are turned into a 404 here.
  if (!project) notFound();

  const { links } = project;

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/projects"
        className="text-sm text-foreground/60 hover:text-foreground"
      >
        ← All projects
      </Link>

      <header className="mt-4">
        <p className="text-sm text-foreground/50">
          {categories.find((c) => c.id === project.category)?.label}
          {project.year && ` · ${project.year}`}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-foreground/70">{project.summary}</p>

        {(links.repo || links.pdf || links.more?.length) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {links.repo && (
              <a
                href={links.repo}
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
              >
                View repo
              </a>
            )}
            {links.pdf && (
              <a
                href={links.pdf}
                className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
              >
                {links.pdfLabel ?? "Read the PDF"}
              </a>
            )}
            {links.more?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-foreground/5">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="mt-12 space-y-12">
        <Section title="The question">
          <p className="text-lg">{project.question}</p>
        </Section>

        <Section title="What I did">
          <BulletList items={project.whatIDid} />
        </Section>

        <Section title="The result">
          <BulletList items={project.result} />
        </Section>

        {project.tools.length > 0 && (
          <Section title="Tools">
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded bg-foreground/5 px-2.5 py-1 font-mono text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.gallery.length > 0 && (
          <Section title="Gallery">
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <figure key={img.src}>
                  <a
                    href={img.src}
                    className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 384px"
                      className="object-contain"
                    />
                  </a>
                  {img.caption && (
                    <figcaption className="mt-2 text-sm text-foreground/60">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/50">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-foreground/30">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
