import projects from "@/db/projects";
import { useParams } from "react-router";

export default function useProjects() {
    const { projectId } = useParams();
    const current = projects.find((project) => project.id === projectId);
 
    return {projects, current}
}