import RetroLoader from "@/components/loadingFake";
import MarkdownBlock from "@/components/markdownBlock";
import { useState } from "react";
import { Link, useParams } from "react-router";

import useBlog from "@/hooks/useBlog";

export default function BlogArticle() {
  const { blogId } = useParams();
  const { content } = useBlog();
  const current = content.filter((project) => project.id === blogId)[0];

  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <div className="w-full flex flex-1">
        <div className="w-[250px] border-r border-t border-t-background border-primary h-full text-sm">
          {content.map((article) => (
            <Link
              to={article.path}
              onClick={() => setLoading(true)}
              className={`flex justify-between hover:bg-primary/10 p-2 border-b border-b-primary/20 ${
                current.id === article.id ? "bg-primary text-white" : ""
              }`}
            >
              <div>{article.title}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 h-full justify-center items-center">
          <RetroLoader
            durationMs={500}
            callback={() => {
              setLoading(false);
            }}
          />
        </div>
      </div>
    );
  return (
    <div className="w-full flex flex-1 ">
      <div className="w-[250px] border-r border-t border-t-background border-primary h-full text-sm">
        {content.map((article) => (
          <Link
            to={article.path}
            onClick={() => setLoading(true)}
            className={`flex justify-between hover:bg-primary/10 p-2 border-b border-b-primary/20 ${
              current.id === article.id ? "bg-primary text-white" : ""
            }`}
          >
            <div>{article.title}</div>
          </Link>
        ))}
      </div>
      <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3">
        <MarkdownBlock source={current.file} />
      </div>
    </div>
  );
}
