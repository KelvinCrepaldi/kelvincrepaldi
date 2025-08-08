import img1 from "@/assets/img1.webp"
import img2 from "@/assets/img2.webp"
import img3 from "@/assets/img3.webp"

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
};

const projects: projectsTypes[] = [
  {
    id: "1",
    name: "Pirate's Punch",
    techs: ["Next", "Express", "React"],
    description:
      "Ecommerce de venda de bebidas com temática pirata, de um bar fantasioso da ilha de tortuga.",
    img: img1,
    demo: "https://piratespunchdrinks.vercel.app/",
    apiRepo: "https://github.com/KelvinCrepaldi/piratespunchdrinks-api",
    frontRepo: "https://github.com/KelvinCrepaldi/piratespunchdrinks",
    type: "Full-Stack",
  },
  {
    id: "2",
    name: "Education Demo",
    techs: ["Next", "Express", "React"],
    description:
      "Demonstração de EAD (Educação a Distância) - Plataforma de aprendizado online.",
    img: img2,
    demo: "https://educationdemo.vercel.app/",
    apiRepo: null,
    frontRepo: "https://github.com/KelvinCrepaldi/educationdemo",
    type: "Front-End",
  },
  {
    id: "3",
    name: "Do.it",
    techs: ["Next", "Express", "React"],
    description:
      "Website de anotações para gerenciar tarefas.",
    img: img3,
    demo: "https://doit2.vercel.app/",
    apiRepo: null,
    frontRepo: "https://github.com/KelvinCrepaldi/doit-app",
    type: "Full-Stack",
  },
];

export default projects;
