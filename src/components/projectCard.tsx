import type { projectsTypes } from "@/db/projects";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function ProjectCard({ project }: { project: projectsTypes }) {
  return (
    <div className="flex flex-1 flex-col max-w-[300px] h-full items-start text-background hover:border border border-primary hover:border-background/20 p-5 transition-colors">
      <h1 className="text-xl mb-2">{project.name}</h1>
      {/* Image */}
      <img
        className="w-full aspect-video"
        src={project.img}
        alt={project.name}
      />

      {/* Info */}
      <div className="w-full pt-2">
        <div className="flex gap-4 mb-2 transition-all">
          <div className="flex gap-5">
            {project.techs.map((tech, index) => (
              <div key={index} className="text-green-600/50">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <p className="leading-5 text-background/80">{project.description}</p>
      </div>
      <div>
        {project.links?.demo && (
          <Button asChild>
            <Link
              to={project.links?.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Link>
          </Button>
        )}

        {project.links?.front && (
          <Button asChild>
            <Link
              to={project.links?.front}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo APP
            </Link>
          </Button>
        )}

        {project.links?.api && (
          <Button asChild>
            <Link
              to={project.links?.api}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo API
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
