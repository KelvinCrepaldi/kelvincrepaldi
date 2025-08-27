import type { projectsTypes } from "@/db/projects";
import { useNavigate } from "react-router";


export default function ProjectCard({ project }: { project: projectsTypes }) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      onClick={() => navigate(project.path)}
      className="rounded-xl  flex-1 border border-transparent  group cursor-pointer overflow-hidden
      [background:linear-gradient(#3D3834,#3D3834)_padding-box,linear-gradient(130deg,#DED5C5,#3D3834,#DED5C5)_border-box] 
      hover:[background:linear-gradient(#3D3834,#3D3834)_padding-box,linear-gradient(90deg,#DED5C5,#DED5C5,#DED5C5)_border-box]"
    >
      <div className="group-hover:bg-background/5 p-6 h-full">
        <div className="flex justify-between text-background/30">
          <h1 className="text-xl mb-2 text-background">{project.name}</h1>{" "}
          <p>2022</p>{" "}
        </div>

        <p className="text-background/40">{project.description}</p>

        <div className="w-full pt-2">
          <div className="flex gap-4 mb-2 transition-all">
            <div className="flex gap-5">
              {project.techs.map((tech, index) => (
                <div key={index} className="text-background border px-3 rounded border-background/10">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
