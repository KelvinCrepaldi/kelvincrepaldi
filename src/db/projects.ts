import img1 from "@/assets/img1.webp"
import img2 from "@/assets/img2.webp"
import img3 from "@/assets/img3.webp"

import file1 from "@/assets/markdown/pleno.md"

type stackTypes = "React" | "Next" | "Vite" | "Express" | "Electron";

export type projectsTypes = {
  id: string;
  name: string;
  description: string;
  techs: stackTypes[];
  demo: string | null;
  frontRepo: string | null;
  apiRepo: string | null;
  img: string;
  type: "Front-End" | "Back-End" | "Full-Stack";
  path: string;
  file: string;
};

const projects: projectsTypes[] = [
  {
    id: "742697fb-546e-4975-8781-a8e8d0b9078e",
    name: "Pirate's Punch",
    techs: ["Next", "Express", "React"],
    description:
      "Ecommerce de venda de bebidas com temática pirata, de um bar fantasioso da ilha de tortuga.",
    img: img1,
    demo: "https://piratespunchdrinks.vercel.app/",
    apiRepo: "https://github.com/KelvinCrepaldi/piratespunchdrinks-api",
    frontRepo: "https://github.com/KelvinCrepaldi/piratespunchdrinks",
    type: "Full-Stack",
    path: "/project/742697fb-546e-4975-8781-a8e8d0b9078e",
    file: file1
  },
  {
    id: "c14eee5b-2949-47c2-adb3-1a745d538ed3",
    name: "Education Demo",
    techs: ["Next", "Express", "React"],
    description:
      "Demonstração de EAD (Educação a Distância) - Plataforma de aprendizado online.",
    img: img2,
    demo: "https://educationdemo.vercel.app/",
    apiRepo: null,
    frontRepo: "https://github.com/KelvinCrepaldi/educationdemo",
    type: "Front-End",
    path: "/project/c14eee5b-2949-47c2-adb3-1a745d538ed3",
    file: file1
  },
  {
    id: "c6a99d39-67b4-47d5-ac00-4fbd69466e43",
    name: "Do.it",
    techs: ["Next", "Express", "React"],
    description:
      "Website de anotações para gerenciar tarefas.",
    img: img3,
    demo: "https://doit2.vercel.app/",
    apiRepo: null,
    frontRepo: "https://github.com/KelvinCrepaldi/doit-app",
    type: "Full-Stack",
    path: "/project/c6a99d39-67b4-47d5-ac00-4fbd69466e43",
    file: file1
  },
];

export default projects;
