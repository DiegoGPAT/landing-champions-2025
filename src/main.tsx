import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <Toaster richColors position="top-right" />
    </HashRouter>
  </StrictMode>
);
