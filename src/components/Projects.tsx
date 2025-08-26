import useProjects from "@/hooks/useProjects";
import ProjectCard from "./projectCard";

export default function Projects() {
  const { projects } = useProjects();
  return (
    <div
      className="w-full bg-primary flex items-center justify-center"
      id="section-projects"
    >
      <div className="py-10">
        <h1 className="text-3xl text-secondary font-mono mb-5">Projects</h1>
        <div className="flex flex-col md:flex-row justify-center gap-5  max-w-5xl w-full">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
