import projects from "@/db/projects";
import { Link } from "react-router";

export default function Projects() {
  return (
    <div className="flex-1 flex">
      <div className="w-[250px] h-full border-r border-primary"></div>

      <div className="flex flex-1 flex-col m-10">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            className="group p-1 bg-background text-primary hover:bg-primary hover:text-background w-full flex items-center gap-5 justify-start transition-all"
          >
            <img src="" className="bg-gray-50 w-[100px] aspect-video "></img>
            <span className="group-hover:ml-5 transition-all">
              {project.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
