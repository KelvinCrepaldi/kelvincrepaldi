import Marquee from "react-fast-marquee";
import rule from "@/assets/rule.svg";

import ProjectCard from "@/components/projectCard";
import projects from "@/db/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-4xl">Kelvin Crepaldi</h1>
        <h2 className="text-primary/70">Front-end Developer</h2>
        <p>React - Vite - Next - Electron - Node - Express</p>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 p-5">
        <p>Confira meus projetos abaixo!</p>
      </div>

      <Marquee
        className=" flex"
        autoFill
        pauseOnHover
        speed={10}
        direction="right"
      >
        <img src={rule} />
      </Marquee>
      <div className="w-full my-[2px] h-[1px] bg-primary/30">x</div>
      <Marquee autoFill pauseOnHover speed={20}>
        <div className="flex">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
