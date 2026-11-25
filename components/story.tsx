import type { StoryBlock, StoryImage } from "@/content/projects";
import { ZoomableImage } from "./zoomable-image";

// Lays out a project's story blocks like a portfolio page: text beside the
// images it explains, wide images across the page, and rows of two or three.
// Everything stacks into one column on phones.
export function Story({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className="space-y-16">
      {blocks.map((block, i) => (
        <StoryBlockView key={i} block={block} />
      ))}
    </div>
  );
}

function StoryBlockView({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "text":
      return (
        <section className="max-w-2xl">
          <Text label={block.label} body={block.body} />
        </section>
      );
    case "split":
      return (
        <section className="grid items-start gap-8 md:grid-cols-2">
          <div className={block.side === "left" ? "md:order-2" : undefined}>
            <Text label={block.label} body={block.body} />
          </div>
          <Figure image={block.image} sizes="(max-width: 768px) 100vw, 480px" />
        </section>
      );
    case "image":
      return <Figure image={block.image} sizes="(max-width: 1024px) 100vw, 976px" />;
    case "row": {
      const three = block.images.length === 3;
      return (
        <div
          className={`grid items-start gap-8 ${three ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {block.images.map((image) => (
            <Figure
              key={image.src}
              image={image}
              sizes={`(max-width: 768px) 100vw, ${three ? 320 : 480}px`}
            />
          ))}
        </div>
      );
    }
  }
}

function Text({ label, body }: { label?: string; body: string[] }) {
  return (
    <>
      {label && (
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/50">
          {label}
        </h2>
      )}
      <div className="space-y-4 text-justify text-lg leading-relaxed text-foreground/85 hyphens-auto">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </>
  );
}

function Figure({ image, sizes }: { image: StoryImage; sizes: string }) {
  return (
    <figure>
      <ZoomableImage image={image} sizes={sizes} />
      {image.caption && (
        <figcaption className="mt-2 text-sm text-foreground/60">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
