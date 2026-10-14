import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    // Keep the compatibility runtime external while the React host is migrated.
    // The six page components will be moved into source modules in later phases.
    assetsInlineLimit: 0,
  },
});
