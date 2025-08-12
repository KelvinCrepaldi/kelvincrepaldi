import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import RetroLoader from "./loadingFake";

interface MarkdownBlockProps {
  source: string; // o caminho ou conteúdo raw do .md
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ source }) => {
  const [mdContent, setMdContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(source)
      .then((res) => res.text())
      .then((text) => setMdContent(text));
  }, [source]);

  if (!mdContent) {
    return null; // ou um loader
  }

  return loading ? (
      <RetroLoader
        durationMs={500}
        callback={() => {
          setLoading(false);
        }}
      />
    ) :(
    <div
  className="
    prose prose-lg
    xl:prose-xl
    prose-headings:font-medium
    prose-headings:text-gray-900
    prose-p:text-gray-800
    prose-li:marker:text-blue-600
    max-w-none
    xl:max-w-4xl
    mx-auto
  "
>
  <Markdown>{mdContent}</Markdown>
</div>
  );
};

export default MarkdownBlock;
