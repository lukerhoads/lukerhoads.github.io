import { readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif"]);

export interface ProjectImageSlot {
  kind: string;
  caption: string;
  src?: string;
  alt?: string;
}

export interface ProjectImage {
  kind: string;
  caption: string;
  alt: string;
  src?: string;
}

function stem(filename: string) {
  return basename(filename, extname(filename)).toLowerCase();
}

function humanize(filename: string) {
  const words = stem(filename)
    .replace(/[_]+/g, " ")
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
  if (!words) return "Photo";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function filesIn(slug: string) {
  const dir = join(process.cwd(), "public", "images", slug);
  try {
    return readdirSync(dir)
      .filter((name) => !name.startsWith("."))
      .filter((name) => IMAGE_EXTENSIONS.has(extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

function fromFile(file: string, slug: string, slots: ProjectImageSlot[]): ProjectImage {
  const match = slots.find((slot) => slot.src && stem(slot.src) === stem(file));
  const caption = match?.caption ?? humanize(file);
  return {
    kind: match?.kind ?? "Photo",
    caption,
    alt: match?.alt ?? caption,
    src: `/images/${slug}/${file}`,
  };
}

/**
 * Images live in public/images/<slug>/. Drop a file in that folder and it
 * shows on the project page. A file whose name matches a media slot keeps
 * that slot's caption. An empty folder falls back to the labeled placeholders.
 */
export function projectImages(slug: string, slots: ProjectImageSlot[]): ProjectImage[] {
  const files = filesIn(slug);
  if (files.length === 0) {
    return slots.map((slot) => ({
      kind: slot.kind,
      caption: slot.caption,
      alt: slot.alt ?? slot.caption,
    }));
  }

  const unused = new Map(files.map((file) => [file.toLowerCase(), file]));
  const items: ProjectImage[] = [];

  const cover = files.find((file) => stem(file) === "cover");
  if (cover) {
    unused.delete(cover.toLowerCase());
    items.push(fromFile(cover, slug, slots));
  }

  for (const slot of slots) {
    if (!slot.src) continue;
    const file = files.find((name) => unused.has(name.toLowerCase()) && stem(name) === stem(slot.src!));
    if (!file) continue;
    unused.delete(file.toLowerCase());
    items.push(fromFile(file, slug, slots));
  }

  for (const file of files) {
    if (!unused.has(file.toLowerCase())) continue;
    items.push(fromFile(file, slug, slots));
  }

  return items;
}
