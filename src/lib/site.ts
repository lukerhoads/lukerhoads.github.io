import { getCollection, getEntry } from "astro:content";

export async function getHome() {
  const home = await getEntry("home", "home");
  if (!home) throw new Error("Missing src/content/home.md");
  return home;
}

export async function getProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
