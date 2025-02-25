import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";
import { getBlogPosts, type BlogPost } from "@/utils/blogPosts";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
    };
    loadPosts();
  }, []);

  return (
    <Layout>
      <header className="container py-24 px-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-black/70">
            I'm a mechanical engineer with a passion for innovative design and precision engineering. 
            With extensive experience in automotive design, industrial manufacturing, and project management, 
            I specialize in turning complex technical challenges into elegant, efficient solutions.
            My approach combines cutting-edge CAD technology with practical manufacturing knowledge, 
            ensuring that each project not only meets technical specifications but also achieves 
            optimal performance and manufacturability.
          </p>
        </div>
      </header>

      <section className="container py-24 px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <ProjectCard
                key={post.slug}
                title={post.title}
                description={post.excerpt}
                image={post.image}
                onClick={() => window.location.href = "blog/" + post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
