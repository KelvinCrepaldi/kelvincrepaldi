import MarkdownBlock from "@/components/markdownBlock";
import { useParams } from "react-router";

import useBlog from "@/hooks/useBlog";

export default function BlogArticle() {
  const { blogId } = useParams();
  const { content } = useBlog();
  const current = content.filter((project) => project.id === blogId)[0];


  return <div className="w-full flex flex-1 ">
  <div className="w-full flex-1 overflow-y-auto p-10 max-h-[calc(100vh-100px)] scrollbar scrollbar-thumb-primary scrollbar-track-background scrollbar-w-3">
    <MarkdownBlock source={current.file} />
  </div>
</div>
}
