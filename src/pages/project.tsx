import useProjects from "@/hooks/useProjects";

export default function Project() {
  const { current: project } = useProjects();

  if (!project) return <div>Houve um erro, projeto não encontrado</div>;

  const { name } = project;
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {name}
    </div>
  );
}
