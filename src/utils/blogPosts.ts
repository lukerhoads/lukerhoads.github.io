export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

let cachedPosts: BlogPost[] | null = null;

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  try {
    const response = await fetch('/blog-posts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    cachedPosts = await response.json();
    return cachedPosts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
} 