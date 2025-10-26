// src/main.jsx
import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Find the root element
const rootElement = document.getElementById("root");

// Check if it has pre-rendered content (from react-snap)
if (rootElement?.hasChildNodes()) {
  // Hydrate: reuse existing HTML
  hydrateRoot(rootElement, <App />);
} else {
  // Fallback: render from scratch (should never happen in production)
  createRoot(rootElement).render(<App />);
}
