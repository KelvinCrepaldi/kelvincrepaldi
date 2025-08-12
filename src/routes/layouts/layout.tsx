import FooterBar from "@/routes/layouts/components/footerBar";
import { Outlet } from "react-router";
import NavBar from "./components/navBar";

export default function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
}
