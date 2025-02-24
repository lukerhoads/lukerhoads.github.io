import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";

const projects = [
  {
    id: 1,
    title: "FSAE Racing Vehicle",
    description: "Custom-designed and manufactured racing vehicle components for the Formula SAE competition.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    handle: "fsae-racing",
  },
  {
    id: 2,
    title: "Precision Machining",
    description: "Innovative machining solutions for complex mechanical components.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    handle: "precision-machining",
  },
  {
    id: 3,
    title: "Industrial Design",
    description: "Modern industrial design projects focusing on functionality and aesthetics.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
    handle: "industrial-design",
  },
];

const Index = () => {
  return (
    <Layout>
      <header className="container py-24">
        <div className="max-w-2xl">
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

      <section className="container py-24 bg-black/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                onClick={() => window.location.href = "blog/" + project.handle}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
