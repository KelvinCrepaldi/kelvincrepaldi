import welcome from "@/assets/markdown/welcome.md";
import hook from "@/assets/markdown/hook.md"

export default function useBlog() {
  const content = [
      {
      id: "3e23b997-85ec-42c7-87a0-803972eebba9",
      title:
        "Welcome!",
      file: welcome,
      date: "12/08/2025",
      path: `/blog/3e23b997-85ec-42c7-87a0-803972eebba9`,
    },
    {
      id: "07e73365-585d-4cba-a4b8-220a0d667694",
      title:
        "React Hooks",
      file: hook,
      date: "12/08/2025",
      path: `/blog/07e73365-585d-4cba-a4b8-220a0d667694`,
      },
  ];

  return { content };
}
