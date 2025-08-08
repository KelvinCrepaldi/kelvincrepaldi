import { useEffect, useState } from "react";

interface RetroLoaderProps {
  durationMs: number;
  callback: () => void;
}

export default function RetroLoader({
  durationMs,
  callback,
}: RetroLoaderProps) {
  const totalBlocks = 15; // Quantidade de quadradinhos
  const [filledBlocks, setFilledBlocks] = useState(0);

  useEffect(() => {
    const intervalTime = durationMs / totalBlocks;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setFilledBlocks(current);

      if (current >= totalBlocks) {
        clearInterval(interval);
        callback();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [durationMs]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex border border-primary rounded-sm overflow-hidden p-[1px]">
        <div className="flex p-0 rounded-[4px] overflow-hidden gap-1 m-[2px]">
          {Array.from({ length: totalBlocks }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-4 ${
                index < filledBlocks ? "bg-primary" : "bg-transparent"
              } `}
            />
          ))}
        </div>
      </div>
      <div className="font-mono text-black text-lg tracking-[-1px] animate-pulse">
        Loading...
      </div>
    </div>
  );
}
