import FooterBar from "@/routes/layouts/components/footerBar";
import { Button } from "@/components/ui/button";
import useProjects from "@/hooks/useProjects";
import { Link, Outlet, useParams } from "react-router";
import NavBar from "./components/navBar";

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
  const current = projects.find((project) => project.id === projectId);

  if (!current) return null;

  return (
    <div className="flex flex-col h-full w-[250px] border-r border-primary max-h-[calc(100vh-80px)] overflow-auto scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-[2px] p-4 bg-background text-primary">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <img
          className="w-full aspect-video mb-2"
          src={current.img}
          alt={current.name}
        />
        <div className="flex justify-between w-full text-lg font-bold">
          <span>{current.name}</span>
          <span className="text-primary/70">{current.year}</span>
        </div>
        <p className=" mt-2 text-primary/70 text-center">
          {current.description}
        </p>
      </div>
      <hr className="border-primary/30 my-2" />
      {/* Contexto */}
      <div className="mb-4 space-y-1 ">
        <div>
          <strong>Contexto:</strong> {current.context}
        </div>
        <div>
          <strong>Categoria:</strong> {current.category}
        </div>
        <div>
          <strong>Status:</strong> {current.status}
        </div>
        {current.private && (
          <div className="text-red-700  mt-1">
            Repositório Privado - Desenvolvido para uma empresa
          </div>
        )}
      </div>
      <hr className="border-primary/30 my-2" />
      {/* Links */}
      <div className="flex flex-col gap-2 mb-4">
        {current.links?.demo && (
          <Button
            asChild
            className="bg-primary text-background hover:bg-primary/80"
          >
            <a
              href={current.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
        )}
        {current.links?.front && (
          <Button
            asChild
            className="bg-background text-primary border border-primary hover:bg-primary hover:text-background"
          >
            <a
              href={current.links.front}
              target="_blank"
              rel="noopener noreferrer"
            >
              Front Repo
            </a>
          </Button>
        )}
        {current.links?.api && (
          <Button
            asChild
            className="bg-background text-primary border border-primary hover:bg-primary hover:text-background"
          >
            <a
              href={current.links.api}
              target="_blank"
              rel="noopener noreferrer"
            >
              API Repo
            </a>
          </Button>
        )}
      </div>{" "}
    </div>
  );
}
