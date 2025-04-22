import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Skiphop } from "./screens/Skiphop/Skiphop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Skiphop />
  </StrictMode>,
);
