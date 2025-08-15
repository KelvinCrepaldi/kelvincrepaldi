import { Link, useLocation, useParams } from "react-router";
import pages from "@/routes/pages";
import { Button } from "@/components/ui/button";
import useProjects from "@/hooks/useProjects";
import TypingAnimation from "@/components/TypingAnimation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { current } = useProjects();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const { projectId } = useParams();
  const active = !projectId;

  useEffect(() => {
    setTitle(current?.name || "");
  }, [current]);
  return (
    <div
      className={`w-full flex h-[40px] items-center justify-between px-4 bg-primary ${
        !active && "border-b border-background"
      }`}
    >
      <div className="text-background flex items-center m-4">
        {title && (
          <TypingAnimation
            key={title}
            text={title}
            delay={0.08}
            duration={0.07}
            start={0}
          />
        )}
      </div>
      <div className="">
        {pages.map((page) => (
          <Link to={page.path} key={page.path}>
            <Button
              asChild
              className={`border-l border-background ${
                location.pathname === page.path
                  ? "bg-background text-primary"
                  : "bg-primary text-background"
              }`}
            >
              <span>{page.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
