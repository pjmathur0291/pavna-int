import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// @ts-expect-error CSS import is handled by the bundler.
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
