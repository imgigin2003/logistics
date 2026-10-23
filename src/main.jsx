// src/main.jsx
import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Find the root element
const rootElement = document.getElementById("root");

// Check if it has pre-rendered content (from scripts/prerender.js)
if (rootElement?.hasChildNodes()) {
  // Hydrate: reuse existing HTML
  hydrateRoot(rootElement, app);
} else {
  // Fallback: render from scratch (dev server)
  createRoot(rootElement).render(app);
}
