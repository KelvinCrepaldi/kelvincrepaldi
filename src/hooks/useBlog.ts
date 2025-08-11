import file1 from "@/assets/markdown/pleno.md";
import file2 from "@/assets/markdown/README.md";

export default function useBlog() {
  const content = [
    {
      id: "94dee757-11bc-4c85-ae82-6147a6e0d784",
      title:
        "Plano Prático de Estudos para Evoluir de Júnior a Pleno em Front-end",
      file: file1,
      date: "11/08/2025",
      path: `/blog/94dee757-11bc-4c85-ae82-6147a6e0d784`,
      },

      {
      id: "d76b27c8-5cac-42af-bf60-f2f751b96781",
      title:
        "Sobre esse site!",
      file: file2,
      date: "11/08/2025",
      path: `/blog/d76b27c8-5cac-42af-bf60-f2f751b96781`,
      },
  ];

  return { content };
}
