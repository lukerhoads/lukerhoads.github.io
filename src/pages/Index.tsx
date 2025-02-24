
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Twitter, Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FSAE Racing Vehicle",
    description: "Custom-designed and manufactured racing vehicle components for the Formula SAE competition.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Precision Machining",
    description: "Innovative machining solutions for complex mechanical components.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Industrial Design",
    description: "Modern industrial design projects focusing on functionality and aesthetics.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen blueprint-grid flex flex-col">
      <nav className="container py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Engineering Portfolio
        </h1>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-black/70 transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <header className="container py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-black/70">
            Precision engineering and innovative design solutions, 
            bringing technical excellence to every project.
          </p>
        </div>
      </header>

      <section className="container py-24 bg-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I'm a mechanical engineer with a passion for innovative design and precision engineering. 
            With extensive experience in automotive design, industrial manufacturing, and project management, 
            I specialize in turning complex technical challenges into elegant, efficient solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My approach combines cutting-edge CAD technology with practical manufacturing knowledge, 
            ensuring that each project not only meets technical specifications but also achieves 
            optimal performance and manufacturability.
          </p>
        </div>
      </section>

      <main className="container py-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              onClick={() => console.log(`Clicked project: ${project.title}`)}
            />
          ))}
        </div>
      </main>

      <footer className="container py-8 border-t border-black/10">
        <div className="flex justify-between items-center">
          <p className="text-sm text-black/70">
            © {new Date().getFullYear()} Engineering Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/blog" className="text-sm text-black/70 hover:text-black transition-colors">Blog</a>
            <a href="/privacy" className="text-sm text-black/70 hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
