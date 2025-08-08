import RetroLoader from "@/components/loadingFake";
import MarkdownBlock from "@/components/markdownBlock";
import projects from "@/db/projects";
import SidebarProject from "@/db/sidebarProject";
import { useState } from "react";
import { useParams } from "react-router";

import sampleMd from "@/assets/markdown/README.md";

export default function Project() {
  const { projectId } = useParams();
  const current = projects.filter((project) => project.id === projectId)[0];

  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <div className="w-full flex flex-1">
        <SidebarProject project={current} />
        <div className="flex flex-1 h-full justify-center items-center">
          <RetroLoader
            durationMs={500}
            callback={() => {
              setLoading(false);
            }}
          />
        </div>
      </div>
    );
  return (
    <div className="w-full flex flex-1">
      <SidebarProject project={current} />
      <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3">
        <MarkdownBlock source={sampleMd} />
      </div>
    </div>
  );
}
