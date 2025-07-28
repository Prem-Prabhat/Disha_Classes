import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Optional plugin import — ensure it's defined
import componentTagger from "vite-plugin-component-tagger"; // Adjust this path if it's a local plugin or needs installation

export default defineConfig(({ mode }): UserConfig => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
