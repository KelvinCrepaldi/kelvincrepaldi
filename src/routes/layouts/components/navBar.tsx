import { Link, useLocation } from "react-router";
import pages from "@/routes/pages";
import { Button } from "@/components/ui/button";
import useProjects from "@/hooks/useProjects";
import TypingAnimation from "@/components/TypingAnimation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { current } = useProjects();
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    current ? setTitle(current.name) : setTitle("")
  },[current])
  return (
    <div className="w-full flex h-[40px] justify-between   bg-primary">
      
      <div className="text-background flex items-center m-4">{ title && <TypingAnimation key={title} text={title} delay={0.08} duration={0.07} start={0}/>}</div>
      <div className="">
        {pages.map((page) => (
          <Link to={page.path}>
            <Button
              className={` border-l border-background ${location.pathname === page.path ? "bg-background text-primary" : "bg-primary text-background"}`}
            >
              {page.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
