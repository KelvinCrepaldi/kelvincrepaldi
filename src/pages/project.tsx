import MarkdownBlock from "@/components/markdownBlock";
import projects from "@/db/projects";
import { useParams } from "react-router";

import sampleMd from "@/assets/markdown/pleno.md";

export default function Project() {
  const { projectId } = useParams();
  const current = projects.filter((project) => project.id === projectId)[0];
  return (
    <div className="w-full flex flex-1 ">
      <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3">
        <MarkdownBlock source={current.file} />
      </div>
    </div>
  );
}
