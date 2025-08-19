import { Route, Routes } from "react-router";
import Layout from "./layouts/layout";
import Home from "@/pages/home";
import Project from "@/pages/project";
import FormBuilderPage from "@/side/formbuilder/page";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:projectId" element={<Project />} />
      </Route>
      <Route path="/form" element={<FormBuilderPage />} />
    </Routes>
  );
}
