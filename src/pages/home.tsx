import Marquee from "react-fast-marquee";

import ProjectCard from "@/components/projectCard";
import projects from "@/db/projects";
import RulerPointer from "@/components/roulerPointer";
import TypingAnimation from "@/components/TypingAnimation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <div className="flex flex-col flex-1 items-center justify-center">
        <TypingAnimation
          delay={0.02}
          duration={0.1}
          text="Kelvin Crepaldi"
          className="text-4xl"
          start={0.2}
        ></TypingAnimation>

        <TypingAnimation
          delay={0.02}
          duration={0.1}
          text="Front-end Developer"
          className="text-primary/70"
          start={0.7}
        ></TypingAnimation>

        <TypingAnimation
          delay={0.02}
          duration={0.1}
          text="React - Vite - Next - Electron - Node - Express"
          start={1.2}
          end
        ></TypingAnimation>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.3 }}
        className="flex items-center justify-center flex-col"
      >
        <p>Confira meus projetos abaixo!</p>
        <ChevronDown className="animate-bounce animation-duration-[2s]" />
      </motion.div>

      <RulerPointer />
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
