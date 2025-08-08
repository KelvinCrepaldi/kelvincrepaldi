import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  duration: number; // Duração total da animação
  delay: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration,
  delay,
}) => {
  const [words, setWords] = useState<string[] | null>(null);
  const length = words?.length;

  useEffect(() => {
    // Divide o texto em palavras (preservando os espaços)
    setWords(text.split(" "));
  }, [text]);

  return (
    <span className="text-primary">
      {words?.map((word, index) => (
        <motion.span
          key={"letter-" + index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: (index + 1) * delay, // Atraso de cada palavra
            duration: duration, // Duração da animação por palavra
            ease: "easeInOut",
          }}
        >
          {word + " "}
        </motion.span>
      ))}

      {words && length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: length * delay,
            duration: duration,
          }}
          className=" w-1 h-4 bg-primary animate-pulse animation-duration-[0.5s] translate-y-[3px] inline-block"
        ></motion.div>
      )}
    </span>
  );
};

export default TypingAnimation;
