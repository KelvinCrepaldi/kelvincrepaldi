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

  return (
      <Marquee
        className={`[&>div]:overflow-visible !overflow-visible transition-all ${
          active
            ? "relative "
            : "absolute -bottom-0 translate-y-[calc(100%-40px)]"
        }`}
        autoFill
        play={play}
      >
        <div className="flex relative overflow-visible">
          {projects.map((project) => (
            <div
              className={`relative    transition-all flex-1 ${
                active ? "" : "hover:-translate-y-[calc(100%-40px)]"
              }`}
              onMouseEnter={() => setPlay(false)}
              onMouseLeave={() => setPlay(true)}
            >
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </Marquee>
  );
};
