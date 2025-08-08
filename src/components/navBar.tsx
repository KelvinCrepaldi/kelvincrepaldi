import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import pages from "@/routes/pages";

export default function NavBar() {
  const route = useLocation().pathname;
  return (
    <div className="w-full flex h-[40px] justify-between   bg-primary">
      <div className="text-background flex items-center m-4">{route}</div>
      <div className="">
        {pages.map((page) => (
          <Link to={page.path}>
            <Button
              className={
                page.path === route
                  ? "bg-background text-primary border-l border-background"
                  : "border-l border-background"
              }
            >
              {page.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
