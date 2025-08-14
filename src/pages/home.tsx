import TypingAnimation from "@/components/TypingAnimation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center mb-[40px]">
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
  );
}

