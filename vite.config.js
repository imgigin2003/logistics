import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile(),
    ViteImageOptimizer({
      logStats: true,
      cache: true,
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
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  assetsInclude: ["**/*.jpg", "**/*.png"],
  base: "/",
});
