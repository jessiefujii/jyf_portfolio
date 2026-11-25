// All project content lives here. To add a project:
//   1. Add an entry to the `projects` array below.
//   2. Put its images (and PDF) in public/projects/<slug>/.
// The home page, the /projects grid and /projects/<slug> all read from this list,
// so nothing else needs to change.

export type ProjectImage = {
  /** Path under /public, e.g. "/projects/my-slug/chart.png" */
  src: string;
  /** Describes the image for screen readers. */
  alt: string;
  caption?: string;
};

export type Project = {
  /** URL segment: /projects/<slug>. Lowercase, hyphens, unique. */
  slug: string;
  title: string;
  /** One or two sentences shown on project cards. */
  summary: string;
  year: string;
  /** Shown on project cards and at the top of the case study. */
  cover: ProjectImage;
  /** Show on the home page. */
  featured?: boolean;

  // Case-study sections
  question: string;
  whatIDid: string[];
  result: string[];
  tools: string[];
  gallery: ProjectImage[];
  links: {
    repo?: string;
    /** Path under /public, e.g. "/projects/my-slug/report.pdf" */
    pdf?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "example-project-one",
    title: "Example Project One",
    summary:
      "Placeholder entry. Replace this with a one-line hook for the project.",
    year: "2026",
    featured: true,
    cover: {
      src: "/projects/example-project-one/cover.svg",
      alt: "Cover image for Example Project One",
    },
    question:
      "What question were you trying to answer? State it the way you would to someone outside the field.",
    whatIDid: [
      "Collected and cleaned the data (say where it came from and how much).",
      "Built the analysis or model, and say why you chose that approach.",
      "Checked the results against a baseline or a holdout set.",
    ],
    result: [
      "The headline finding, with a number if you have one.",
      "What it means or what someone could do with it.",
    ],
    tools: ["Python", "pandas", "scikit-learn", "Jupyter"],
    gallery: [
      {
        src: "/projects/example-project-one/figure-1.svg",
        alt: "Placeholder figure 1",
        caption: "Caption explaining what this figure shows.",
      },
      {
        src: "/projects/example-project-one/figure-2.svg",
        alt: "Placeholder figure 2",
        caption: "Another figure.",
      },
    ],
    links: {
      repo: "https://github.com/your-username/example-project-one",
      pdf: "/projects/example-project-one/report.pdf",
    },
  },
  {
    slug: "example-project-two",
    title: "Example Project Two",
    summary: "Second placeholder entry. It has no PDF, so that link is hidden.",
    year: "2025",
    featured: true,
    cover: {
      src: "/projects/example-project-two/cover.svg",
      alt: "Cover image for Example Project Two",
    },
    question: "The question this project set out to answer.",
    whatIDid: ["Step one.", "Step two."],
    result: ["What came out of it."],
    tools: ["R", "ggplot2"],
    gallery: [
      {
        src: "/projects/example-project-two/figure-1.svg",
        alt: "Placeholder figure",
      },
    ],
    links: {
      repo: "https://github.com/your-username/example-project-two",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
