import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useProjects from "@/hooks/useProjects";
import { Link } from "react-router";

export default function Project() {
  const { current: project } = useProjects();

  if (!project) return <div>Houve um erro, projeto não encontrado</div>;

  const {
    name,
    img,
    techs,
    description,
    role,
    category,
    year,
    features,
    links,
  } = project;
  return (
    <article className="flex flex-col items-center justify-center p-2 gap-10 lg:p-10 ">
      <div className="flex flex-col lg:flex-row flex-1 lg:items-center lg:justify-center w-full h-full gap-5 text-primary mb-20 lg:mb-0">
        <div className="flex items-start flex-col gap-2 w-full lg:w-1/4 p-5 bg-white/20">
          <div className="text-xl flex justify-between w-full">
            <div>{name}</div> <div className="text-primary/70">{year}</div>
          </div>
          <div className="flex flex-wrap gap-2 text-primary/70">
            {techs.map((tech) => (
              <div className="border px-2 text-sm rounded bg-primary/70 text-white">
                {tech}
              </div>
            ))}
          </div>
          <div className="text-start leading-5">{description}</div>

          <div className="leading-4">
            <div className="">Tecnologias:</div>
            <div className="text-start leading-5 text-primary/70">{techs}</div>
          </div>

          <div className="leading-4">
            <div className="text-start">Tipo:</div>
            <div className="text-start leading-5 text-primary/70">
              {category}
            </div>
          </div>

          <div className="leading-4">
            <div className="text-start">Foco:</div>
            <div className="text-start leading-5 text-primary/70">{role}</div>
          </div>

          <div className="leading-4">
            <div className="text-start">Funcionalidades:</div>
            <ul className="list-disc list-inside text-start">
              {features.map((feature) => (
                <li className="text-primary/70">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-full mt-5">
            {links?.demo && (
              <Button asChild>
                <Link
                  to={links?.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
              </Button>
            )}
            {project.private ? (
              <div className="text-red-800">"Repositórios github privados"</div>
            ) : (
              <>
                {links?.front && (
                  <Button asChild>
                    <Link
                      to={links?.front}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Front-End Github Repo
                    </Link>
                  </Button>
                )}
                {links?.api && (
                  <Button asChild>
                    <Link
                      to={links?.api}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Back-End Github Repo
                    </Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 w-full">
          <Carousel className="w-[calc(100%-100px)]">
            <div className="border-8 border-primary bg-primary">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img src={img} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <CarouselPrevious className="bg-primary text-background" />
            <CarouselNext className="bg-primary text-background" />
          </Carousel>
        </div>
      </div>
    </article>
  );
}
