import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App.tsx";
import { results } from "./data.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App results={results} />
  </StrictMode>
);