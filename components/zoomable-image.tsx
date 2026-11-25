"use client";

import Image from "next/image";
import { useRef } from "react";
import type { StoryImage } from "@/content/projects";

// An image at its natural shape that opens full screen when clicked.
// Uses the native <dialog>: Escape closes it, and so does a click anywhere.
export function ZoomableImage({
  image,
  sizes,
}: {
  image: StoryImage;
  sizes: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="block w-full cursor-zoom-in"
        aria-label={`Enlarge image: ${image.alt}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full rounded-lg border border-foreground/10"
        />
      </button>
      <dialog
        ref={dialog}
        onClick={() => dialog.current?.close()}
        className="m-auto max-h-none max-w-none cursor-zoom-out bg-transparent p-0 backdrop:bg-black/85"
        aria-label={image.alt}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="95vw"
          className="h-auto max-h-[92vh] w-auto max-w-[95vw] rounded-md"
        />
      </dialog>
    </>
  );
}
