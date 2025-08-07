import Marquee from "react-fast-marquee";

export default function ProjectCard() {
  return (
    <div className="w-[300px] flex flex-col items-center justify-center group">
      <div className="bg-primary w-full text-background h-[40px] flex justify-between items-center px-2 border-r border-t border-t-primary border-background group-hover:bg-background group-hover:text-primary group-hover:border-primary group-hover:border-t transition-all">
        <div>Pirate's Punch</div> <div>FullStack</div>
      </div>
      <div className="border-r border-primary w-full flex flex-col p-2 items-center pb-5 group-hover:bg-primary transition-all group-hover:text-background">
        <div className="w-full aspect-video bg-amber-950/20 group-hover:bg-background transition-all">
          <img src=""></img>
        </div>

        <div className="w-full pt-2 ">
          <div className="flex gap-4 text-primary/70 px-2 group-hover:text-background/70 transition-all">
            <div className="flex  gap-5">
              <div>Next</div>
              <div>Tailwind</div>
            </div>
          </div>
          <h1>
            Demonstração de EAD (Educação a Distância) - Plataforma de
            aprendizado online.
          </h1>
        </div>
      </div>
    </div>
  );
}
