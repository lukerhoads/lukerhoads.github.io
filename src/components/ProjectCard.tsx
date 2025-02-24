
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const ProjectCard = ({ title, description, image, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-black/70">{description}</p>
      </div>
    </motion.div>
  );
};
