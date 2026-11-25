import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-4 text-foreground/80">
        <p>
          Write a short paragraph about your background: what you studied,
          where you&apos;ve worked, and what kind of problems you like.
        </p>
        <p>
          A second paragraph on what you&apos;re looking for next, or what
          you&apos;re learning right now.
        </p>
      </div>

      <a
        href={site.resume}
        download
        className="mt-8 inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
      >
        Download resume (PDF)
      </a>
    </div>
  );
}
