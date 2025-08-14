import { useEffect, useMemo, useState, type HTMLAttributes } from "react";
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
  const [isStarted, setIsStarted] = useState(false);

  const letters = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, start * 1000);

    return () => clearTimeout(timer);
  }, [start]);

  return (
    <div {...props} style={{ whiteSpace: "pre-wrap", ...style }}>
      {letters.map((letter, index) => (
        <motion.span
          key={`letter-${index}`}
          initial={{ opacity: 0, x: 10 }}
          animate={isStarted ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: isStarted ? index * delay : 0,
            duration,
            ease: "easeInOut",
          }}
        >
          {letter}
        </motion.span>
      ))}

      {letters.length > 0 && end && isStarted && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: letters.length * delay,
            duration: 0.7,
            repeat: Infinity,
          }}
          className="w-[2px] h-4 bg-primary inline-block align-middle ml-1"
        />
      )}
    </div>
  );
}
