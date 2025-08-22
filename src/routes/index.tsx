import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import Project from "@/pages/project";
import FormBuilderPage from "@/side/formbuilder/features/builder/page";
import FormRenderPage from "@/side/formbuilder/features/render/page";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:projectId" element={<Project />} />
      </Route>
      <Route path="/form/builder" element={<FormBuilderPage />} />
      <Route path="/form/render" element={<FormRenderPage />} />
    </Routes>
  );
}
