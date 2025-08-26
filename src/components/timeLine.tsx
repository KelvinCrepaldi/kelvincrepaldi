type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Kenzie Academy Brasil",
    role: "Desenvolvimento Web Fullstack",
    period: "MAIO DE 2021 -  ABRIL DE 2022",
    description:
      "Curso de 2.000 horas de Desenvolvimento Full Stack que abrange as tecnologias Front End e Back End além de soft skills disponíveis para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux, Python (Django e Flask) e SQL.",
  },
  {
    company: "Adam Robo",
    role: "Desenvolvedor de Software Front-End",
    period: "ABRIL 2024 - ATUAL",
    description:
      "Atuo como desenvolvedor front-end júnior, com ampla autonomia no desenvolvimento de aplicações web e desktop. Sou responsável pelo planejamento técnico, implementação de interfaces com React, Vite e Tailwind CSS, além da criação de funcionalidades em aplicações PWA com IndexedDB e no desenvolvimento desktop com Electron. Também colaboro na organização das tarefas da equipe, definição de prioridades técnicas, realização de testes, correções e evolução contínua dos produtos da empresa.",
  },
  // Adicione mais...
];

export default function Timeline() {
  return (
    <section
      className="w-full bg-primary flex flex-col px-10 items-center justify-center font-mono"
      id="section-timeline"
    >
      <div>
        <h1 className="text-3xl text-secondary mb-10">Time Line</h1>
        <div className="relative border-l border-background pl-6 ml-4  max-w-5xl w-full text-secondary">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-20 relative">
              {/* Ponto na linha */}
              <div className="absolute -left-[30px] top-2 w-3 h-3 bg-background  rounded-full"></div>

              <h3 className="text-lg font-semibold text-background">
                {exp.role}
              </h3>
              <p className="text-sm text-background/70">
                {exp.company} · {exp.period}
              </p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
