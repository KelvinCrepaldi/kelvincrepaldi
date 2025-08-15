import FooterBar from "@/routes/layouts/components/footerBar";
import { Outlet, useParams } from "react-router";
import NavBar from "./components/navBar";
import useProjects from "@/hooks/useProjects";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ProjectCard from "@/components/projectCard";
import RulerPointer from "@/components/rulerPointer";
import { motion } from "framer-motion";

export default function Layout() {
  const { projectId } = useParams();
  const active = !projectId;
  return (
    <div className="flex flex-col justify-between h-screen ">
      <NavBar />
      <div className="flex flex-col justify-center w-full h-full text-center relative overflow-hidden">
        {active ? (
          <Outlet />
        ) : (
          <>
            <div className="absolute   top-0 left-0 w-full h-[calc(100vh-116px)] overflow-x-hidden overflow-y-auto">
              <Outlet />
            </div>
            <div className="h-full w-full"></div>
          </>
        )}
        {active && <RulerPointer />}

        <ProjectsSlider active={active} />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: active ? "-100%" : "0%",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut", // ou "easeInOut" se quiser mais suavidade
        }}
        className="absolute top-0 left-0 w-full h-full bg-primary -z-20"
      />
      <FooterBar />
    </div>
  );
}
const ProjectsSlider = ({ active = true }: { active?: boolean }) => {
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
};
