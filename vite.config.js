import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
            manualChunks(id) {
              if (!id) return;
              if (id.includes("node_modules")) {
                if (id.includes("three/examples") || id.includes("three/examples/jsm")) return "vendor-three-examples";
                if (id.includes("three")) return "vendor-three";
                if (id.includes("react")) return "vendor-react";
                return "vendor";
              }
              if (id.includes("/src/components/ThreeBackground")) return "three-bg";
            },
      },
    },
  },
});
