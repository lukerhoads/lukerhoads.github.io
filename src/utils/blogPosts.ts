import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  // Import all .md files from the blog directory
  const modules = import.meta.glob('../content/blog/*.md', { query: 'raw' });
  
  for (const path in modules) {
    const content = await modules[path]();
    const slug = path.replace('../content/blog/', '').replace('.md', '');
    
    // Parse front matter and content
    const { data, content: markdown } = matter(content);
    
    posts.push({
      slug,
      title: data.title,
      date: data.date,
      image: data.image,
      excerpt: data.excerpt,
      content: markdown
    });
  }
  
  // Sort posts by date
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
} 