import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const srcDir = path.resolve(process.cwd(), 'src/content/blog');
const outputFile = path.resolve(process.cwd(), 'public/blog-posts.json');

async function processBlogPosts() {
  try {
    // Read all markdown files from the blog directory
    const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.md'));
    const posts = [];

    for (const file of files) {
      const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
      const slug = file.replace('.md', '');
      
      // Parse front matter and content
      const { data, content: markdown } = matter(content);
      
      // Process markdown to HTML
      const processedContent = await remark()
        .use(html)
        .process(markdown);
      const contentHtml = processedContent.toString();

      posts.push({
        slug,
        title: data.title,
        date: data.date,
        image: data.image,
        excerpt: data.excerpt,
        content: contentHtml
      });
    }

    // Sort posts by date
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Write processed posts to JSON file in public directory
    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log('Blog posts processed and saved to JSON file');
  } catch (error) {
    console.error('Error processing blog posts:', error);
    process.exit(1);
  }
}

processBlogPosts(); 