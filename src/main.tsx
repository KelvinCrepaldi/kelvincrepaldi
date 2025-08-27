import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import GlobalRoutes from "./routes/globalRoutes.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <GlobalRoutes />
    </BrowserRouter>
  </StrictMode>
);
