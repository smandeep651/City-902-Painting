import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this is set correctly
  build: {
    outDir: "frontend/dist", // This is the folder Vercel needs
  },
});
