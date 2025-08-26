import TypingAnimation from "@/components/TypingAnimation";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import RulerPointer from "@/components/rulerPointer";
import Timeline from "@/components/timeLine";
import Divide from "@/components/divide";
import { ArrowUp, ChevronDown, Download } from "lucide-react";
import useSocial from "@/hooks/useSocial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import downloadCurriculum from "@/assets/curriculum/CV_Kelvin-Crepaldi.pdf";

export default function Home() {
  const { social } = useSocial();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center" id="section-home">
      <div className="flex flex-col flex-1 items-center justify-center min-h-[60vh] max-w-5xl w-full">
        <TypingAnimation
          delay={0.02}
          duration={0.1}
          text="Kelvin Crepaldi"
          className="text-4xl font-jersey15"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.3 }}
          className="flex gap-1 pt-3"
        >
          {social.map((e) => (
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center border p-1 rounded border-primary hover:text-background hover:bg-primary m-1"
                >
                  {e.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{e.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger>
              <a
                href={downloadCurriculum}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center border p-1 rounded border-primary hover:text-background hover:bg-primary m-1"
              >
                <Download size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <a>Currículo</a>
            </TooltipContent>
          </Tooltip>
        </motion.div>
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
      <div className="flex flex-col gap-40 bg-primary">
        <Projects />
        <Divide />
        <Timeline />
        <div className="pb-40 flex items-center justify-center">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 m-3 flex items-center justify-center rounded-full bg-background/40 text-primary animate-bounce cursor-pointer hover:bg-background/80 transition-colors"
          >
            <ArrowUp />
          </button>
        </div>
      </div>
    </section>
  );
}
