import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";
import { getBlogPosts, type BlogPost } from "@/utils/blogPosts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

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
          <h2 className="text-2xl font-bold mb-6">Hey, I'm Luke!</h2>
          <p className="text-lg text-black/70">
            I am a mechanical engineering student at Brown University. Check out my various projects, including the drivetrain for the Brown FSAE team and a carbon fiber windsurfing board.
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
                onClick={() => navigate(`/blog/${post.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
