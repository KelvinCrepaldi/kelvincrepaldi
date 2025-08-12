import FooterBar from "@/components/footerBar";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import useGithub from "@/hooks/useGithub";
import useProjects from "@/hooks/useProjects";
import { Link, Outlet, useParams } from "react-router";

export default function ProjectLayout() {
  const { projectId } = useParams();
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex">
        <Link to={projectId ? "/project" : "/"}>
          <Button className="w-[250px] border-background hover:border-b-primary border-b border-b-primary border-r hover:border-r-primary">
            {"<"} Voltar
          </Button>
        </Link>
        <NavBar />
      </div>
      <div className="flex flex-1">
        <div className="w-[250px] border-r border-primary h-full">
          <SidebarProject />
        </div>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
      <FooterBar />
    </div>
  );
}

function SidebarProject() {
  const { projectId } = useParams();
  const { projects } = useProjects();
  const { data, loading, error } = useGithub({ username: "KelvinCrepaldi" });
  const current = projects.filter((project) => project.id === projectId)[0];

  if (projectId) return <div> {current.name} </div>;
  if (loading) <div>Loading</div>;

  return data ? (
    <div className="flex flex-col">
     
      <div className="p-5">
        <div className="text-2xl">{data.name}</div>
        <div>{data.bio}</div>
        <div className="flex justify-between">
          <div>followers: {data.followers}</div>
          <div>following: {data.following}</div>
        </div>
      </div>
      <Link
        to={"https://github.com/KelvinCrepaldi?tab=repositories"}
        className=""
      >
        <Button className="w-full flex justify-start">
          Github Public Repository
        </Button>
      </Link>
    </div>
  ) : (
    <></>
  );
}
