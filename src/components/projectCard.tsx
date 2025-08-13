import type { projectsTypes } from "@/db/projects";
import { Link } from "react-router";

export default function ProjectCard({ project }: { project: projectsTypes }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="w-[300px] flex flex-col items-center justify-center group"
    >
      <div className="bg-primary w-full text-background h-[40px] flex justify-between items-center px-2 border-r border-t border-t-primary border-background group-hover:bg-background group-hover:text-primary group-hover:border-primary group-hover:border-t transition-all">
        <div>{project.name}</div> <div>{project.year}</div>
      </div>
      <div className="flex-1 border-r border-primary w-full flex flex-col p-2 items-center pb-5 group-hover:bg-primary transition-all group-hover:text-background">
        <div className="w-full aspect-video bg-amber-950/20 group-hover:bg-background transition-all">
          <img className="w-full aspect-video" src={project.img}></img>
        </div>

        <div className="w-full pt-2">
          <div className="flex gap-4 text-primary/70 mb-2 group-hover:text-background/70 transition-all">
            <div className="flex  gap-5">
              {project.techs.map((tech) => (
                <div className="m-0">{tech}</div>
              ))}
            </div>
          </div>
          <p className="text-start leading-5">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
