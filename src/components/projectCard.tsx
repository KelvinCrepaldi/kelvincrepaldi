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
      className={ `w-[300px] flex flex-col items-center justify-center group border border-primary ${active && "border-transparent"} `}
      {...props}
    >
      <div
        className={`
         w-full
           h-[40px] flex
            justify-between
             items-center
              px-2
                   group-hover:bg-background
                    group-hover:text-primary
                       transition-all
                       ${active ? "text-primary bg-background" : " text-background bg-primary"}
                       `}
      >
        <div>{project.name}</div> <div>{project.year}</div>
      </div>
      <div className="w-full  flex h-[260px] flex-col p-2 items-center pb-5 group-hover:bg-primary transition-all group-hover:text-background">
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
