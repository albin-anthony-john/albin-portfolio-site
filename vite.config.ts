/**
 * Vite configuration: React plugin, build-time SEO plugin, dev server on
 * port 3000, and production output in `build/` (served by Cloudflare, see
 * wrangler.jsonc).
 */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import seoPlugin from "./vite-plugin-seo";

export default defineConfig(({ mode }) => {
  // loadEnv gives variables already set in the process (Cloudflare / CI)
  // priority over .env files.
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react(), seoPlugin(env.VITE_SITE_URL ?? "")],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "build",
    },
  };
});
