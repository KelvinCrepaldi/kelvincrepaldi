import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Project from "@/pages/project";
import Blog from "@/pages/blog";
import BlogArticle from "@/pages/blogArticle";
import ProjectLayout from "./layouts/projectLayout";
import BlogLayout from "./layouts/blogLayout";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<ProjectLayout />}>
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Route>

      <Route element={<BlogLayout />}>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogArticle />} />
      </Route>
    </Routes>
  );
}
