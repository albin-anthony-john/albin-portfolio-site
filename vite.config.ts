/// <reference types="vitest/config" />
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

/**
 * Sync VITE_* from .env files into process.env when not already set
 * (e.g. by Cloudflare). No hardcoded secrets or site values in this file.
 * Priority: process.env (Cloudflare / CI) > .env / .env.[mode]
 */
function syncViteEnv(mode: string) {
  const fileEnv = loadEnv(mode, process.cwd(), "VITE_");

  for (const [key, value] of Object.entries(fileEnv)) {
    if (!process.env[key] || process.env[key]?.trim() === "") {
      process.env[key] = value;
    }
  }

  return {
    ...fileEnv,
    VITE_SITE_URL: process.env.VITE_SITE_URL || fileEnv.VITE_SITE_URL || "",
  };
}

function seoStaticFilesPlugin(siteUrl: string) {
  const normalized = siteUrl.replace(/\/$/, "");
  if (!normalized) {
    return { name: "seo-static-files" };
  }

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
  const env = syncViteEnv(mode);

  return {
    plugins: [react(), seoStaticFilesPlugin(env.VITE_SITE_URL)],
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
