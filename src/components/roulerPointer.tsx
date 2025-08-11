import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import rule from "@/assets/rule.svg";
export default function RulerPointer() {
  const [x, setX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full overflow-hidden relative ">
      <div className=" relative *:left-0 w-full max-w-screen pointer-events-none">
        {/* Seta e valor X */}
        <div className="relative flex items-center" style={{ left: x }}>
          <div className="flex flex-col items-center">
            {/* Texto da coordenada */}
            <span className="relative top-6 left-3 text-sm opacity-50 ">
              {x}
            </span>
            {/* Seta para baixo */}
            <div className="relative top-2 -left-[10px] w-[0.1px] h-[25px] bg-primary opacity-30"></div>
          </div>
        </div>
      </div>

      <Marquee
        className=" flex"
        autoFill
        pauseOnHover
        speed={10}
        direction="right"
      >
        <img src={rule} />
      </Marquee>
    </div>
  );
}
