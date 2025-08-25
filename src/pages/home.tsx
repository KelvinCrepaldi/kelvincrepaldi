import TypingAnimation from "@/components/TypingAnimation";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import RulerPointer from "@/components/rulerPointer";
import Timeline from "@/components/timeLine";
import Marquee from "react-fast-marquee";
import RuleMiddle from "@/assets/ruleMid.svg";
import Divide from "@/components/divide";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col flex-1 items-center justify-center min-h-[60vh] max-w-[1080px] w-full">
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
      <Projects />
      <Divide />
      <Timeline />
    </section>
  );
}
