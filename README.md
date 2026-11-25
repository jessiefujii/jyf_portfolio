# Jessie Fujii: Portfolio

Personal portfolio site for my data analysis and urban planning & design work: a home page, a projects index, a case study for each project, and an about page.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Edits show up as soon as you save.

To check a production build: `npm run build`.

## How it's organized

```
app/
  page.tsx                  home: intro, featured projects, contact
  projects/page.tsx         all projects, grouped by category
  projects/[slug]/page.tsx  one reusable case-study page per project
  about/page.tsx            bio, experience, education, skills
components/
  project-card.tsx          card used on the home and projects pages
content/
  projects.ts               every project's content, one entry each
  about.ts                  about-page text: bio, experience, skills
  site.ts                   name, tagline, email and links
public/
  projects/<slug>/          each project's images and PDF
```

The pages only lay content out; all the text lives in `content/`.

## Adding a project

1. Add an entry to the `projects` list in `content/projects.ts`. TypeScript flags any missing field.
2. Put its cover, gallery images and PDF in `public/projects/<slug>/`, where `<slug>` matches the entry's `slug`.

The home page, projects page and the new `/projects/<slug>` case study all pick it up automatically. Each case study has sections for the question, what I did, the result, tools, an image gallery, and links to the repo and PDF. Empty sections and missing links are hidden.

Other options on an entry:

- `featured: true` also shows the project on the home page.
- `hidden: true` keeps a project off the site until it's ready.
- `category` puts it under "Data analysis" or "Urban planning & design".
- `links.pdfLabel` renames the PDF button, and `links.more` adds further buttons, such as a full report or a related paper.
