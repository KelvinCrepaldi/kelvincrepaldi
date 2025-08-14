import FooterBar from "@/routes/layouts/components/footerBar";
import { Outlet, useParams } from "react-router";
import NavBar from "./components/navBar";
import useProjects from "@/hooks/useProjects";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "@/components/projectCard";
import RulerPointer from "@/components/roulerPointer";

export default function Layout() {
  const { projectId } = useParams();
  const active = !!!projectId;
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <div className="flex flex-col justify-center w-full h-full text-center relative overflow-hidden">
        <Outlet />
        <RulerPointer/>
        <ProjectsSlider active={active} />
      </div>
      <FooterBar />
    </div>
  );
}
const ProjectsSlider = ({ active = true }: { active?: boolean }) => {
  const { projects } = useProjects();
  const [play, setPlay] = useState(true);
  const [disabledHoverIds, setDisabledHoverIds] = useState<Set<string>>(new Set());

  const handleClick = (id: string) => {
    setDisabledHoverIds((prev) => new Set(prev).add(id)); // desativa hover para este card
  };

  const handleMouseEnter = (id: string) => {
    setPlay(false);
    setDisabledHoverIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id); // reativa hover ao entrar de novo
      return newSet;
    });
  };

  const handleMouseLeave = () => {
    setPlay(true);
  };

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
};
