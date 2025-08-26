import type { projectsTypes } from "@/db/projects";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: projectsTypes }) {
  return (
    <Link
      to={project.links?.demo || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl p-6 flex-1 border border-transparent  group
      [background:linear-gradient(#3D3834,#3D3834)_padding-box,linear-gradient(130deg,#DED5C5,#3D3834,#DED5C5)_border-box] 
      hover:[background:linear-gradient(#3D3834,#3D3834)_padding-box,linear-gradient(90deg,#DED5C5,#DED5C5,#DED5C5)_border-box]"
    >
      <div className="flex justify-between text-background/30">
        <p>2022</p>{" "}
        <SquareArrowOutUpRight
          size={20}
          className="group-hover:animate-pulse group-hover:text-background"
        />
      </div>
      <h1 className="text-xl mb-2 text-background">{project.name}</h1>
      <p className="text-background/40">{project.description}</p>

      <div className="w-full pt-2">
        <div className="flex gap-4 mb-2 transition-all">
          <div className="flex gap-5">
            {project.techs.map((tech, index) => (
              <div key={index} className="text-background">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
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
    </Link>
  );
}
