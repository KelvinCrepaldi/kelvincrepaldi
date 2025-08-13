import MarkdownBlock from "@/components/markdownBlock";
import projects from "@/db/projects";
import { useParams } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Project() {
  const { projectId } = useParams();
  const current = projects.filter((project) => project.id === projectId)[0];
  return (
    <div className="w-full flex flex-col flex-1 pt-5">
      <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3">
        <div className="w-full flex items-center justify-center max-w-[800px] mx-auto">
          <Carousel>
            <CarouselContent>
              {current?.images?.map((img, index) => (
                <CarouselItem key={index}>
                  <img src={img} className="w-full aspect-video" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary text-background hover:bg-background hover:text-primary border-primary" />
            <CarouselNext className="bg-primary text-background hover:bg-background hover:text-primary border-primary" />
          </Carousel>
        </div>
        {current?.file && <MarkdownBlock source={current.file} />}
      </div>
    </div>
  );
}
