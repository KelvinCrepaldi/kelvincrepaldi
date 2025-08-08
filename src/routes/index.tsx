import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import ContentLayout from "./layouts/contentLayout";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Project from "@/pages/project";

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
        <Route path="/blog" element={<Projects />} />
      </Route>
    </Routes>
  );
}
