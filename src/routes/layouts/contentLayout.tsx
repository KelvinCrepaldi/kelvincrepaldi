import FooterBar from "@/components/footerBar";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router";

export default function ContentLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex">
        <Link to={"/projects"}>
          <Button className="w-[300px] border-background hover:border-b-primary border-b border-b-primary border-r hover:border-r-primary">
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
