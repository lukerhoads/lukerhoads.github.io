
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const ProjectCard = ({ title, description, image, onClick }: ProjectCardProps) => {
  return (
    <div
      className="border border-black/10 bg-white/50 backdrop-blur-[2px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/10">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold flex items-center gap-2 mb-2">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
        </h3>
        <p className="text-sm text-black/70">{description}</p>
      </div>
    </div>
  );
};
