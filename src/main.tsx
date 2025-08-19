import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import GlobalRoutes from "./routes/index.tsx";
import BuilderProvider from "./side/formbuilder/context/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BuilderProvider>
        <GlobalRoutes />
      </BuilderProvider>
    </BrowserRouter>
  </StrictMode>
);
