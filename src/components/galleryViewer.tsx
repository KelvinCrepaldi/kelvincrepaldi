import { Border } from "./border";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import type { projectsTypes } from "@/db/projects";

export default function GalleryViewer({ project }: { project: projectsTypes }) {
  return (
    <div
      key={`carousel-${project.name}`}
      className="flex items-center justify-center flex-1 w-full"
    >
      <Carousel className="w-[calc(100%-100px)]">
        <div className="border-8 border-primary bg-primary">
          <CarouselContent>
            {project.images?.map((image: string) => (
              <CarouselItem key={`carousel-item-${image}-${project.name}`}>
                <Border key={`border-${image}-${project.name}`}>
                  <img src={image} />
                </Border>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <CarouselPrevious className="bg-primary text-background" />
        <CarouselNext className="bg-primary text-background" />
      </Carousel>
    </div>
  );
}
