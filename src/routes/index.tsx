import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import ContentLayout from "./layouts/contentLayout";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Project from "@/pages/project";
import Blog from "@/pages/blog";
import BlogArticle from "@/pages/blogArticle";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route element={<ContentLayout />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogArticle />} />
      </Route>
    </Routes>
  );
}
