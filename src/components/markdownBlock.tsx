import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface MarkdownBlockProps {
  source: string; // o caminho ou conteúdo raw do .md
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ source }) => {
  const [mdContent, setMdContent] = useState<string>("");

  useEffect(() => {
    fetch(source)
      .then((res) => res.text())
      .then((text) => setMdContent(text));
  }, [source]);

  if (!mdContent) {
    return null; // ou um loader
  }

  {
    /* <MarkdownTypewriter delay={mdContent.length * 0.0005}>
      
    </MarkdownTypewriter> */
  }

  return (
    <div className="prose-base ">
      <Markdown>{mdContent}</Markdown>
    </div>
  );
};

export default MarkdownBlock;
