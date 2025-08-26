import rule2 from "@/assets/rule2.svg";
import Marquee from "react-fast-marquee";
export default function FooterBar() {
  return (
    <div className="w-full bg-primary">
      <Marquee
        className=" flex"
        autoFill
        pauseOnHover
        speed={10}
        direction="right"
      >
        <img src={rule2} />
      </Marquee>

      <div className="max-w-5xl flex flex-col items-center justify-center mx-auto py-20 text-background font-mono">
        <div>© 2025 Kelvin Crepaldi — Desenvolvedor Front-end</div>
        <div>kelvin.crepaldi@hotmail.com</div>
        <div>wathsapp: +55 (41)99674-8781</div>
      </div>
    </div>
  );
}
