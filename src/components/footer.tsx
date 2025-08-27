import rule2 from "@/assets/rule2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useSocial from "@/hooks/useSocial";
import { Download } from "lucide-react";
import Marquee from "react-fast-marquee";
import downloadCurriculum from "@/assets/curriculum/CV_Kelvin-Crepaldi.pdf";

export default function Footer() {
  const { social } = useSocial();
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

        <div className="flex gap-1 pt-3">
          {social.map((e) => (
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center border p-1 rounded border-background hover:text-primary hover:bg-background m-1"
                >
                  {e.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent className="shadow-xl">
                <p>{e.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger>
              <a
                href={downloadCurriculum}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center border p-1 rounded border-background hover:text-primary hover:bg-background m-1"
              >
                <Download size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent className="shadow-xl">
              <a>Currículo</a>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
