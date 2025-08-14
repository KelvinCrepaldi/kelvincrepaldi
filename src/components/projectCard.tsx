import type { projectsTypes } from "@/db/projects";
import useProjects from "@/hooks/useProjects";
import { Link } from "react-router";

export default function ProjectCard({
  project,
  ...props
}: {
  project: projectsTypes;
}) {
  const { current } = useProjects();
  const active = current?.id === project?.id;

  return (
    <Link
      to={project.path}
      className={`w-[300px] flex flex-col items-center justify-center group border border-primary ${
        active ? "border-transparent" : ""
      }`}
      {...props}
    >
      {/* Top bar */}
      <div
        className={`w-full h-[40px] flex justify-between items-center px-2 transition-all group-hover:bg-background group-hover:text-primary ${
          active ? "text-primary bg-transparent" : "text-background bg-primary"
        }`}
      >
        <div>{project.name}</div>
        <div>{project.year}</div>
      </div>

      {/* Content */}
      <div className="w-full h-[260px] flex flex-col items-center p-2 pb-5 transition-all group-hover:bg-primary group-hover:text-background">
        {/* Image */}
        <div className="w-full aspect-video bg-amber-950/20 transition-all group-hover:bg-background">
          <img
            className="w-full aspect-video"
            src={project.img}
            alt={project.name}
          />
        </div>

        {/* Info */}
        <div className="w-full pt-2">
          <div className="flex gap-4 text-primary/70 mb-2 transition-all group-hover:text-background/70">
            <div className="flex gap-5">
              {project.techs.map((tech, index) => (
                <div key={index} className="m-0">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <p className="text-start leading-5">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
