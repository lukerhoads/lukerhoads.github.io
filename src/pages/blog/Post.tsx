import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogPost } from "@/components/BlogPost";
import { getBlogPost } from "@/utils/blogPosts";
import { useEffect, useState } from "react";

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const loadedPost = await getBlogPost(postId);
      console.log("Loaded Post: ", loadedPost);
      setPost(loadedPost);
      setLoading(false);
    }
    
    loadPost();
  }, [postId]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-24">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container py-24">
          <h1 className="text-4xl font-bold">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-24">
        <BlogPost
          title={post.title}
          date={post.date}
          content={post.content}
          image={post.image}
        />
      </div>
    </Layout>
  );
};

export default BlogPostPage; 