import ecosmd from "@/assets/projects/ecos/ecos.md";
import ecoslogo from "@/assets/projects/ecos/thumb.png";
import ecosimg from "@/assets/projects/ecos/image1.png";

import adamDigitalMd from "@/assets/projects/adamDigital/adamDigital.md";
import adamDigitalImg from "@/assets/projects/adamDigital/image.png";
import adamDigital1 from "@/assets/projects/adamDigital/image1.png";
import adamDigital2 from "@/assets/projects/adamDigital/image2.png";
import adamDigital3 from "@/assets/projects/adamDigital/image3.png";
import adamDigital4 from "@/assets/projects/adamDigital/image4.png";
import adamDigital5 from "@/assets/projects/adamDigital/image5.png";

import piratesPunchMd from "@/assets/projects/piratespunch/piratespunch.md";
import piratesPunch from "@/assets/projects/piratespunch/thumb.png";

type stackTypes = "React" | "Next" | "Vite" | "Express" | "Electron" | "PWA";

export type projectLink = {
  demo?: string;
  front?: string;
  api?: string;
};

export type projectsTypes = {
  id: string;
  name: string;
  description: string;
  techs: stackTypes[];
  year: string;
  role: string;
  context:
    | "Projeto de Trabalho"
    | "Freelance"
    | "Projeto de Estudo"
    | "Hackathon";
  category: string;
  status: "Concluído" | "Em andamento" | "Manutenção";
  img: string;
  images?: string[];
  path: string;
  file?: string;
  private: boolean;
  links?: projectLink;
  features: string[];
};

const projects: projectsTypes[] = [
  {
    id: "f63694e0-353c-42e9-b27c-9d9c0ffaf572",
    name: "Adam Robo Ecos",
    description:
      "Plataforma de testes de acuidade visual integrada a dispositivo físico",
    techs: ["React", "Vite", "PWA"],
    year: "2024",
    role: "Front-End Developer",
    context: "Projeto de Trabalho",
    category: "Saúde ocular",
    status: "Concluído",
    img: ecoslogo,
    images: [ecoslogo, ecosimg],
    path: "/f63694e0-353c-42e9-b27c-9d9c0ffaf572",
    file: ecosmd,
    private: true,
    features: [
      "Aplicar testes com formulários",
      "Painel de admistrador",
      "Gerenciar testes aplicados",
    ],
  },
  {
    id: "e70d5cc2-95ae-43e5-a4de-1bd8a418bff0",
    name: "Protótipo Adam Robo Digital",
    description: "Plataforma de aplicação de formulários digitais",
    techs: ["React", "Vite"],
    year: "2024",
    role: "Front-End Developer",
    context: "Projeto de Trabalho",
    category: "Protótipo de Formulário",
    status: "Concluído",
    img: adamDigitalImg,
    images: [
      adamDigitalImg,
      adamDigital1,
      adamDigital2,
      adamDigital3,
      adamDigital4,
      adamDigital5,
    ],
    path: "/e70d5cc2-95ae-43e5-a4de-1bd8a418bff0",
    file: adamDigitalMd,
    private: true,
    links: {
      demo: "https://digital.adamroboglobal.com/",
    },
    features: [
      "Aplicar testes com formulários",
      "Gerenciar testes aplicados",
      "Importar e exportar lista de testes aplicados",
    ],
  },

  {
    id: "a0b54a2f-2dc3-48f5-bf9b-410e1d9ff596",
    name: "Pirate's Punch",
    description: "E-commerce de bebidas com tematica pirata",
    techs: ["React", "Next", "Express"],
    year: "2023",
    role: "Full-Stack Developer",
    context: "Projeto de Estudo",
    category: "E-Commerce",
    status: "Concluído",
    img: piratesPunch,
    images: [piratesPunch],
    path: "/a0b54a2f-2dc3-48f5-bf9b-410e1d9ff596",
    file: piratesPunchMd,
    private: false,
    links: {
      demo: "https://piratespunchdrinks.vercel.app/",
      front: "https://github.com/KelvinCrepaldi/piratespunchdrinks",
      api: "https://github.com/KelvinCrepaldi/piratespunchdrinks-api",
    },
    features: [
      "Carrinho com soma automática",
      "Responsivo com design tematizado",
      "Histórico de compras, cartões e endereços",
      "Lista de produtos com filtro e páginação",
    ],
  },
];

export default projects;
