import { Link } from "react-router";

import useBlog from "@/hooks/useBlog";

export default function Blog() {
  const { content } = useBlog();

  return (
    <div className="w-full flex flex-1 ">
      <div className="w-[250px] border-r border-primary h-full"></div>
      <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3 flex flex-col">
        {content.map((article) => (
          <Link
            to={article.path}
            className="flex justify-between hover:bg-primary/10 p-2 border-b border-b-primary/20"
          >
            <div>{article.title}</div>
            <div>{article.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
