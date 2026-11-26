import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { GlobalValuesProvider } from "./store/GlobalStateContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalValuesProvider>
      <App />
    </GlobalValuesProvider>
  </React.StrictMode>
);
