import useProjects from "@/hooks/useProjects";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "@/components/projectCard";

export default function ProjectsMarquee({
  active = true,
}: {
  active?: boolean;
}) {
  const { projects } = useProjects();
  const [play, setPlay] = useState(true);
  const [disabledHoverIds, setDisabledHoverIds] = useState<Set<string>>(
    new Set()
  );

  const handleClick = (id: string) => {
    setDisabledHoverIds((prev) => new Set(prev).add(id));
  };

  const handleMouseEnter = (id: string) => {
    setPlay(false);
    setDisabledHoverIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const handleMouseLeave = () => {
    setPlay(true);
  };

  // modificar comportamento do Marquee para conseguir sair fora do componente
  return (
    <Marquee
      className={`[&>div]:overflow-visible !overflow-visible transition-all ${
        active
          ? "relative "
          : "absolute -bottom-0 translate-y-[calc(100%-40px)]"
      }`}
      autoFill
      play={play}
      speed={20}
    >
      <div className="flex relative overflow-visible">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative transition-all flex-1 ${
              active
                ? ""
                : !disabledHoverIds.has(project.id) &&
                  "hover:-translate-y-[calc(100%-40px)]"
            }`}
            onClick={() => handleClick(project.id)}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Marquee>
  );
}
