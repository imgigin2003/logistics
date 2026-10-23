import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["chrome >= 64", "edge >= 79", "firefox >= 67", "safari >= 12"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
    }),
    ViteImageOptimizer({
      logStats: true,
      cache: true,
      // Keep the cache out of the repo root (it was being committed by accident)
      cacheLocation: "node_modules/.cache/vite-plugin-image-optimizer",
      png: { quality: 80 },
      jpeg: { quality: 85 },
      webp: { lossless: false, quality: 60 },
      svgo: {
        plugins: ["preset-default", "removeViewBox:false"],
      },
    }),
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
      },
      format: {
        comments: false,
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  ssr: {
    // CommonJS-only package; bundle it so the prerender step can import it
    noExternal: ["react-helmet-async"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  base: "/",
});
