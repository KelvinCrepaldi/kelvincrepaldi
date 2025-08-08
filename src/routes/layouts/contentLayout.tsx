import FooterBar from "@/components/footerBar";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation } from "react-router";

export default function ContentLayout() {
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex">
        <Link to={location === "/projects" ? "/" : "/projects"}>
          <Button className="w-[250px] border-background hover:border-b-primary border-b border-b-primary border-r hover:border-r-primary">
            {"<"} Voltar
          </Button>
        </Link>
        <NavBar />
      </div>
      <Outlet />
      <FooterBar />
    </div>
  );
}
