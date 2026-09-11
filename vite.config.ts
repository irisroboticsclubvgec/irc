import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoBase = process.env.VITE_BASE || "/";

// https://vitejs.dev/config/
export default defineConfig({
  // Works at any path locally, and uses the repo subpath on GitHub Pages.
  base: repoBase,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // keep the heavy three.js / R3F stack in its own lazy chunk
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1100,
  },
});
