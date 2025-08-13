import { Button } from "@/components/ui/button";
import projects from "@/db/projects";
import { Link } from "react-router";

export default function Projects() {
  return (
    <section className="flex flex-col gap-10 py-10 justify-center items-center flex-1  overflow-auto p-1">
      <div className="max-w-[950px] w-full">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-xl">
          Aqui você encontra alguns dos projetos que desenvolvi de trabalhos,
          para praticar, explorar novas tecnologias e testar ideias.
          <br /> Cada projeto é fruto de aprendizado contínuo, seja no
          front-end, back-end ou integração entre ambos.
        </p>
      </div>
      <div className="flex flex-col gap-4 flex-wrap max-w-[900px]">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex border border-primary flex-1 rounded-[2px] w-full max-w-[700px]"
          >
            <div className="flex flex-col flex-1">
              <div className="p-2">
                <img src={project.img} className="rounded-[2px]"></img>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">{project.name} </div>
                  <div className="text-primary/60">
                    {project.role} - {project.year}
                  </div>
                </div>

                <div>{project.description}</div>
              </div>

              <div className="flex bg-primary w-full">
                {project.path && (
                  <Button asChild>
                    <Link to={project.path}>Article</Link>
                  </Button>
                )}
                {project.links?.demo && (
                  <Button asChild>
                    <a
                      href={project.links?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                )}
                {project.links?.front && (
                  <Button asChild>
                    <a
                      href={project.links?.front}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Front Repo
                    </a>
                  </Button>
                )}
                {project.links?.api && (
                  <Button asChild>
                    <a
                      href={project.links?.api}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API Repo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
