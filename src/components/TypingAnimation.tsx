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
  text = "",
  delay,
  start,
  end = false,
  style,
  ...props
}: TypingAnimationProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const letters = Array.from(text); // Corrige caracteres especiais

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), start * 1000);
    return () => clearTimeout(timer);
  }, [start]);

  useEffect(() => {
    if (!isStarted || visibleCount >= letters.length) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        const next = prev + 1;
        if (next >= letters.length) clearInterval(interval);
        return next;
      });
    }, delay * 1000);

    return () => clearInterval(interval);
  }, [isStarted, delay, letters.length, visibleCount]);

  const visibleText = letters.slice(0, visibleCount).join("");

  return (
    <div
      {...props}
      style={{
        position: "relative",
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {/* Ocupa espaço sem aparecer */}
      <span
        aria-hidden="true"
        style={{
          visibility: "hidden",
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>

      {/* Texto digitando visível */}
      <motion.span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {visibleText}
      </motion.span>

      {/* Cursor */}
      {end && visibleText.length === letters.length && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="w-[2px] h-4 bg-primary inline-block align-middle ml-1"
        />
      )}
    </div>
  );
}
