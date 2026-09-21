/// <reference types="vitest/config" />
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

function seoStaticFilesPlugin(siteUrl: string) {
  const normalized = siteUrl.replace(/\/$/, "");

  const writeSeoFiles = (outDir: string) => {
    writeFileSync(
      resolve(outDir, "robots.txt"),
      `User-agent: *\nAllow: /\n\nSitemap: ${normalized}/sitemap.xml\n`
    );
    writeFileSync(
      resolve(outDir, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `  <url>\n` +
        `    <loc>${normalized}/</loc>\n` +
        `    <changefreq>monthly</changefreq>\n` +
        `    <priority>1.0</priority>\n` +
        `  </url>\n` +
        `</urlset>\n`
    );
  };

  return {
    name: "seo-static-files",
    configureServer() {
      writeSeoFiles(resolve(process.cwd(), "public"));
    },
    closeBundle() {
      writeSeoFiles(resolve(process.cwd(), "build"));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL || "https://albinantony.dev";

  return {
    plugins: [react(), seoStaticFilesPlugin(siteUrl)],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "build",
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
  };
});
