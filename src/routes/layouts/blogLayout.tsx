import FooterBar from "@/components/footerBar";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import useBlog from "@/hooks/useBlog";
import { Link, Outlet, useParams } from "react-router";

export default function BlogLayout() {
  const { blogId } = useParams();
  const { content } = useBlog();
  const current = content.filter((project) => project.id === blogId)[0];

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex">
        <Link to={blogId ? "/blog" : "/"}>
          <Button className="w-[250px] border-background hover:border-b-primary border-b border-b-primary border-r hover:border-r-primary">
            {"<"} Voltar
          </Button>
        </Link>
        <NavBar />
      </div>
      <div className="flex flex-1">
        <div className="w-[250px] border-r border-primary h-full">
          {content.map((article) => (
            <Link
              to={article.path}
              className={`flex justify-between hover:bg-primary/10 p-2 border-b border-b-primary/20 ${
                current?.id === article.id ? "bg-primary text-white" : ""
              }`}
            >
              <div>{article.title}</div>
            </Link>
          ))}
        </div>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
