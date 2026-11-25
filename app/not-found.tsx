import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl py-16">
      <p className="text-sm font-medium text-foreground/60">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-foreground/70">
        That page doesn&apos;t exist, or it may have moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          See projects
        </Link>
        <Link
          href="/"
          className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-foreground/40"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
