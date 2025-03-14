import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
    proxy: {
      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
});
