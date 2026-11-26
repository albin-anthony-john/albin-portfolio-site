/**
 * Application entry point (loaded by index.html).
 *
 * Mounts <App /> into #root, wrapped in StrictMode and MUI's
 * StyledEngineProvider, and loads the global stylesheet once.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import "./styles/global.scss";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element #root is missing from index.html");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    {/* injectFirst: MUI's styles load before ours, so SCSS can refine them without !important. */}
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
