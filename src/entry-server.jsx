// Build-time render entry used by scripts/prerender.js
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((tags) => tags.toString())
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}
