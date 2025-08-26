import useProjects from "@/hooks/useProjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
export default function Project() {
  const [view, setView] = useState<string | null>(null);
  const { current: project } = useProjects();

  if (!project) return <div>Projeto não encontrado</div>;

  const handleView = (img: string) => setView(img);
  const handleClose = () => setView(null);

  return (
    <article
      key={project.name}
      className="w-full max-w-5xl mx-auto flex flex-col gap-5 p-10"
    >
      <div className="flex justify-between w-full">
        <h1 className="text-3xl">{project.name}</h1> <div>{project.year}</div>
      </div>
      <div>
        <div>{project.description}</div>
      </div>

      <div>
        {project.links?.front && (
          <Button asChild>
            <Link
              to={project.links?.front}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo APP
            </Link>
          </Button>
        )}

        {project.links?.api && (
          <Button asChild>
            <Link
              to={project.links?.api}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo API
            </Link>
          </Button>
        )}
      </div>
      <h1 className="text-2xl w-full">Prints Demonstrativos</h1>
      <div
        key={`carousel-${project.name}`}
        className="flex flex-col items-center justify-center flex-1 w-full px-15 border-primary/20"
      >
        <Carousel className="w-full ">
          <div className="">
            <CarouselContent>
              {project.images?.map((image: string) => (
                <CarouselItem
                  className="md:basis-1/3 sm:basis-2/3"
                  key={`carousel-item-${image}-${project.name}`}
                >
                  <img
                    onClick={() => handleView(image)}
                    src={image}
                    className="aspect-video border border-primary rounded shadow-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <CarouselPrevious className="bg-primary text-background" />
          <CarouselNext className="bg-primary text-background" />
        </Carousel>
      </div>

      {view && <ViewImage img={view} close={handleClose} />}
    </article>
  );
}

const ViewImage = ({ img, close }: { img: string; close: () => void }) => {
  return (
    <div
      onClick={() => close()}
      className="flex items-center justify-center flex-col fixed top-0 left-1/2 -translate-x-1/2 h-screen w-screen bg-black/80 aspect-video z-10"
    >
      <p className="text-center text-background text-xl">
        Clique novamente para fechar
      </p>

      <img src={img} className="flex-1 max-h-[90vh] aspect-video" />
    </div>
  );
};
