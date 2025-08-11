import { useEffect, useState, type HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  duration: number; // duração da animação por letra
  delay: number; // delay entre letras
  end?: boolean; // mostrar cursor piscando
  start: number; // tempo em segundos para começar a animação
}

export default function TypingAnimation({
  text,
  duration,
  delay,
  start,
  end = false,
  style,
  ...props
}: TypingAnimationProps) {
  const [letters, setLetters] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, start * 1000);

    return () => clearTimeout(timer);
  }, [start]);

  return (
    <div {...props} style={{ whiteSpace: "pre-wrap", ...style }}>
      <motion.div>
        {letters.map((letter, index) => (
          <motion.span
            key={"letter-" + index}
            initial={{ opacity: 0, x: 10 }}
            animate={isStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{
              delay: isStarted ? (index + 1) * delay : 0,
              duration,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}

        {letters.length > 0 && end && isStarted && (
          <>
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: letters.length * delay,
                duration: 0.7,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[2px] h-4 bg-primary animate-pulse animation-duration-[1s] translate-y-[3px] inline-block"
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
