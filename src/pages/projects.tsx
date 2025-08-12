import ProjectCard from "@/components/projectCard";
import projects from "@/db/projects";
import { Link } from "react-router";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 max-h-[calc(100vh-90px)] overflow-auto gap-2 p-1 ">
      {projects.map((project) => (
        <Link to={project.path}>
          {" "}
          <div className=" flex group">
            <img src={project.img} className="w-[300px] aspect-video border-4 border-primary" />

            <div className="w-full group-hover:bg-primary">
              <div className="w-full bg-primary text-background group-hover:text-primary group-hover:bg-background group-hover:border-t border-primary  p-2">
                <h1 className="text-start leading-5">{project.name}</h1>
              </div>

              <div className=" p-2 flex gap-4 text-primary/70 mb-2 group-hover:text-background/70 transition-all ">
                <div className="flex  gap-5">
                  {project.techs.map((tech) => (
                    <div className="m-0">{tech}</div>
                  ))}
                </div>
              </div>
              <p className=" p-2 text-start leading-5 group-hover:text-background">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
