import useExperience from "@/hooks/useExperience";


export default function Timeline() {
  const {experiences} = useExperience()
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
