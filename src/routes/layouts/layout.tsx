import FooterBar from "@/components/footerBar";
import NavBar from "@/components/navBar";
import { Outlet } from "react-router";

export default function Layout() {
    return <div className="flex flex-col justify-between h-screen">
    <NavBar />
    <Outlet/>
    <FooterBar/>
  </div>
}