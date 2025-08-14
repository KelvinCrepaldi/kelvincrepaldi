import projects from "@/db/projects";
import { useParams } from "react-router";

export default function useProjects() {
    const { projectId } = useParams();
    const current = projects.filter((project) => project.id === projectId)[0];
 
    return {projects, current}
}