import useProjects from "@/hooks/useProjects";
import ProjectCard from "./projectCard";

export default function Projects() {
  const { projects } = useProjects();
  return (
    <div className="w-full bg-primary flex items-center justify-center">
    
      <div>
        <div className="flex flex-col md:flex-row justify-center gap-5 py-10 max-w-[1080px] w-full">
                {projects.map((project) => (
                  <ProjectCard project={project} />
                ))}
              </div>
      </div>
      
    </div>
  );
}
