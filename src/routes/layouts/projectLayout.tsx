import FooterBar from "@/routes/layouts/components/footerBar";
import { Button } from "@/components/ui/button";
import useProjects from "@/hooks/useProjects";
import { Link, Outlet, useParams } from "react-router";
import NavBar from "./components/navBar";
import project from "@/pages/project";
import TypingAnimation from "@/components/TypingAnimation";

export default function ProjectLayout() {
  const { projectId } = useParams();
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex">
        <Link to={projectId ? "/project" : "/"}>
          <Button className="w-[250px] border-background hover:border-b-primary border-b border-b-primary border-r hover:border-r-primary">
            {"<"} Voltar
          </Button>
        </Link>
        <NavBar />
      </div>
      <div className="flex flex-1">
        {projectId && <SidebarProject />}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
      <FooterBar />
    </div>
  );
}

function SidebarProject() {
  const { projectId } = useParams();
  const { projects } = useProjects();
  const current = projects.filter((project) => project.id === projectId)[0];

  return (
    <div className="flex flex-col h-full w-[250px] border-r border-primary">
      <div className="flex-1 border-r border-primary w-full flex flex-col p-2 items-center pb-5">
        <div className="flex justify-between w-full">
          <TypingAnimation
            text={current.name}
            delay={0.01}
            duration={0.1}
            start={0}
          />
          <TypingAnimation
            text={current.type}
            delay={0.01}
            duration={0.1}
            start={0.2}
          />
        </div>
        <div className="w-full aspect-video bg-amber-950/20 group-hover:bg-background transition-all">
          <img className="w-full aspect-video" src={current.img}></img>
        </div>

        <div className="flex flex-col w-full">
          {current.demo && (
            <Button
              asChild
              className="bg-background text-primary hover:bg-primary hover:text-background flex justify-start"
            >
              <a href={current.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
          {current.frontRepo && (
            <Button
              asChild
              className="bg-background text-primary hover:bg-primary hover:text-background flex justify-start"
            >
              <a
                href={current.frontRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Front Repo
              </a>
            </Button>
          )}
          {current.apiRepo && (
            <Button
              asChild
              className="bg-background text-primary hover:bg-primary hover:text-background flex justify-start"
            >
              <a
                href={current.apiRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                API Repo
              </a>
            </Button>
          )}
        </div>

        <div className="w-full pt-2">
          <TypingAnimation
            text={current.description}
            delay={0.01}
            duration={0.1}
            start={0.3}
          />
          <div className="flex gap-4 text-primary/70 mb-2 group-hover:text-background/70 transition-all">
            <div className="flex  gap-5">
              {current.techs.map((tech, index) => (
                <TypingAnimation
                  text={tech}
                  delay={0.01}
                  duration={0.1}
                  start={0.9 + 0.4 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
