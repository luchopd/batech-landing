import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingPage onStartOnboarding={() => { /* no-op for public landing */ }} />
  </React.StrictMode>,
);
