import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const media = z.object({
  kind: z.string(),
  caption: z.string(),
  src: z.string().optional(),
  alt: z.string().optional(),
});

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "./src/content" }),
  schema: z.object({
    name: z.string(),
    email: z.string(),
    school: z.string(),
    degree: z.string(),
    location: z.string(),
    graduation: z.string(),
    portrait: z.string().optional(),
    description: z.string(),
    skills: z.array(z.string()),
    projectsIntro: z.string(),
    projectsDescription: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    summary: z.string(),
    role: z.string(),
    organization: z.string().optional(),
    location: z.string().optional(),
    dates: z.string().optional(),
    tools: z.array(z.string()).default([]),
    mediaNote: z.string().optional(),
    media: z.array(media).default([]),
  }),
});

export const collections = { home, projects };
