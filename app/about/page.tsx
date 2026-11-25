import type { Metadata } from "next";
import {
  bio,
  education,
  experience,
  interests,
  skills,
} from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-4 text-lg text-foreground/80">
        {bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={site.resume}
          download
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Download resume (PDF)
        </a>
        <a
          href={site.linkedin}
          className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
        >
          GitHub
        </a>
      </div>

      <Section title="Education">
        {education.map((e) => (
          <div key={e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{e.school}</h3>
              <span className="text-sm text-foreground/50">{e.dates}</span>
            </div>
            <p className="text-foreground/80">{e.degree}</p>
            <p className="text-sm text-foreground/60">{e.detail}</p>
          </div>
        ))}
      </Section>

      <Section title="Experience">
        <ol className="space-y-8">
          {experience.map((role) => (
            <li key={`${role.title}-${role.org}-${role.dates}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {role.title}
                  <span className="font-normal text-foreground/70">
                    {" "}
                    · {role.org}
                  </span>
                </h3>
                <span className="text-sm text-foreground/50">{role.dates}</span>
              </div>
              {role.location && (
                <p className="text-sm text-foreground/60">{role.location}</p>
              )}
              {role.points.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/80 marker:text-foreground/30">
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Skills">
        <dl className="space-y-4">
          {skills.map((group) => (
            <div key={group.label} className="sm:flex sm:gap-6">
              <dt className="shrink-0 font-semibold sm:w-48">{group.label}</dt>
              <dd className="mt-1.5 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded bg-foreground/5 px-2.5 py-1 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Interests">
        <p className="text-foreground/80">{interests.join(" · ")}</p>
      </Section>
    </div>
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
    <section className="mt-12">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
        {title}
      </h2>
      {children}
    </section>
  );
}
