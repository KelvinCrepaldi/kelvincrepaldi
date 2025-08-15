import { Border } from "@/components/border";
import TypingAnimation from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useProjects from "@/hooks/useProjects";
import { motion } from "framer-motion";
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

  let base = 0;

  const next = (step = 0.1) => {
    base += step;
    return base;
  };

  return (
    <article
      key={project.name}
      className="flex flex-col items-center justify-center p-2 gap-10 lg:p-10 h-full "
    >
      <div className="flex flex-col lg:flex-row flex-1 lg:items-center lg:justify-center gap-5 text-background mb-20 lg:mb-0">
        <div
          key={`info-${project.name}`}
          className="flex items-start justify-center flex-col gap-2 w-full h-full lg:w-1/4 p-5"
        >
          {/* Nome e ano */}
          <div className="text-xl flex justify-between w-full">
            <TypingAnimation
              key={`name-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text={name}
            />
            <TypingAnimation
              key={`year-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text={year.toString()}
              className="text-background/70"
            />
          </div>

          {/* Techs */}
          <div
            key={`techbox-${project.name}-x`}
            className="flex flex-wrap gap-2 text-background/70"
          >
            {techs.map((tech, index) => (
              <motion.div
                key={`techbox-${project.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{ delay: index + 1, startTime: 1 }}
                className="border px-2 text-sm rounded bg-primary/70 text-white"
              >
                <TypingAnimation
                  key={`tech-${tech}-${project.name}`}
                  delay={0.05}
                  duration={0.1}
                  start={next()}
                  text={tech}
                />
              </motion.div>
            ))}
          </div>

          {/* Descrição */}
          <TypingAnimation
            key={`desc-${project.name}`}
            delay={0.05}
            duration={0.1}
            start={next()}
            text={description}
            className="text-start leading-5"
          />

          {/* Tecnologias */}
          <div className="leading-4">
            <TypingAnimation
              key={`tech-title-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text="Tecnologias:"
              className="text-start"
            />
            <TypingAnimation
              key={`tech-main-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text={techs[0]}
              className="text-start leading-5 text-background/70"
            />
          </div>

          {/* Categoria */}
          <div className="leading-4">
            <TypingAnimation
              key={`type-title-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text="Tipo:"
              className="text-start"
            />
            <TypingAnimation
              key={`type-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text={category}
              className="text-start leading-5 text-background/70"
            />
          </div>

          {/* Foco / Role */}
          <div className="leading-4">
            <TypingAnimation
              key={`role-title-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text="Foco:"
              className="text-start"
            />
            <TypingAnimation
              key={`role-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text={role}
              className="text-start leading-5 text-background/70"
            />
          </div>

          {/* Funcionalidades */}
          <div className="leading-4">
            <TypingAnimation
              key={`features-title-${project.name}`}
              delay={0.05}
              duration={0.1}
              start={next()}
              text="Funcionalidades:"
              className="text-start"
            />
            <ul className="list-disc list-inside text-start">
              {features.map((feature, index) => (
                <li key={`feature-${index}-${project.name}`}>
                  <TypingAnimation
                    delay={0.05}
                    duration={0.1}
                    start={next()}
                    text={feature}
                    className="text-background/70"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 w-full mt-5">
            {links?.demo && (
              <Button key={`demo-${project.name}`} asChild>
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
              <TypingAnimation
                key={`private-${project.name}`}
                delay={0.05}
                duration={0.1}
                start={next()}
                text="Repositórios github privados"
                className="text-red-800"
              />
            ) : (
              <>
                {links?.front && (
                  <Button key={`front-${project.name}`} asChild>
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
                  <Button key={`api-${project.name}`} asChild>
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

        {/* Imagem / Carrossel */}
        <div
          key={`carousel-${project.name}`}
          className="flex items-center justify-center flex-1 w-full"
        >
          <Carousel className="w-[calc(100%-100px)]">
            <div className="border-8 border-primary bg-primary">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={`carousel-item-${index}-${project.name}`}>
                    <Border key={`border-${index}-${project.name}`}>
                      <img src={img} />
                    </Border>
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
