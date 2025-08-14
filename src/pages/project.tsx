import projects from "@/db/projects";
import { useParams } from "react-router";

export default function Project() {
  const { projectId } = useParams();
  const current = projects.filter((project) => project.id === projectId)[0];
  const {name, techs, category,context,description,id,img,path,role,status,year,file,images,links} = current
  return (
    <div className="h-screen border border-red-500 bg-green-500">
      
    </div>
  );
}
