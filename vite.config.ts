import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Sitemap plugin ko import karein
import viteSitemap from "vite-plugin-sitemap";


// Optional plugin import — ensure it's defined
import componentTagger from "vite-plugin-component-tagger";

export default defineConfig(({ mode }): UserConfig => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),

      // Sitemap plugin ko yahan add karein
      viteSitemap({
        // Apni website ka sahi URL yahan daalein
        hostname: "https://www.dishaclass.in",

        // Apne project ke sabhi routes ko yahan list karein
        dynamicRoutes: ["/", "/about", "/classes", "/admission", "/contact"],

        // robots.txt file bhi generate karega
        robots: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      }),

      // Aapka existing conditional plugin
      mode === "development" && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
