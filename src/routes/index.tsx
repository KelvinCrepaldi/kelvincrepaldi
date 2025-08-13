import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Project from "@/pages/project";
import ProjectLayout from "./layouts/projectLayout";

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
    </Routes>
  );
}
