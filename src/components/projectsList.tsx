import useProjects from "@/hooks/useProjects";
import ProjectCard from "./projectCard";

export default function ProjectsList() {
  const { projects } = useProjects();
  return (
    <div
      className="w-full bg-primary flex items-center justify-center mp-5"
    >
      <div className="py-10">
        <h1 className="text-3xl text-secondary font-mono mb-5">Projects</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-5  max-w-5xl w-full ">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
