// Prerenders each route into static HTML so crawlers and link previews get
// full content and metadata without running JavaScript.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// GitHub Pages serves /review from review.html and uses 404.html for any
// unknown path, so the NotFound route is rendered into 404.html.
const routes = [
  { url: "/", file: "index.html" },
  { url: "/review", file: "review.html" },
  { url: "/404", file: "404.html" },
];

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

for (const route of routes) {
  const { html, head } = render(route.url);
  const page = template
    .replace(/<title>[\s\S]*?<\/title>/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (page === template) {
    throw new Error(`Prerender failed to inject content for ${route.url}`);
  }

  await fs.writeFile(path.join(distDir, route.file), page);
  console.log(`prerendered ${route.url} -> dist/${route.file}`);
}

await fs.rm(ssrDir, { recursive: true, force: true });
