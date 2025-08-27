import Footer from "@/components/footer";
import { Outlet } from "react-router";
import NavBar from "@/components/navBar";
import ScrollToTop from "@/components/scrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
