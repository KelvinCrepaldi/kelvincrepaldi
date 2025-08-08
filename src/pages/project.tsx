import projects from "@/db/projects";
import SidebarProject from "@/db/sidebarProject";
import { useParams } from "react-router";


export default function Project() {
  const { projectId } = useParams();
  const current = projects.filter(project => project.id === projectId)[0]

    return (
      <div className="w-full flex flex-1">
      <SidebarProject project={current}/>
      <div className="w-full flex-1 overflow-y-auto p-10">
        oi
      </div>
    </div>
    );
  }
  