import { Link, useResolvedPath } from "react-router";
import { Button } from "./ui/button";
import pages from "@/routes/pages";


export default function NavBar() {
  const route = useResolvedPath("/");
  return (
    <div className="w-full flex h-[40px] justify-between   bg-primary">
      <div className="text-background flex items-center m-4">{ route.pathname}</div>
      <div className="">
        {pages.map((page) => (
          <Link to={page.path}>
            <Button
              className={
                page.path === route.pathname ? "bg-background text-primary" : ""
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
