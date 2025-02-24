
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

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
    <div className="min-h-screen blueprint-grid">
      <header className="container py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Mechanical Engineering Portfolio</h1>
          <p className="text-lg text-black/70">
            Precision engineering and innovative design solutions, 
            bringing technical excellence to every project.
          </p>
        </motion.div>
      </header>

      <main className="container pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                onClick={() => console.log(`Clicked project: ${project.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
