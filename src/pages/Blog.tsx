import { useEffect, useState } from 'react';
import { Layout } from "@/components/Layout";
import { getBlogPosts, type BlogPost } from '@/utils/blogPosts';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(posts => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container py-24">
          <h1 className="text-4xl font-bold mb-12">Loading...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-24">
        <h1 className="text-4xl font-bold mb-12">Engineering Blog</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-black/10 pb-8">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-black/70 mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-black/70">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 