/**
 * Generates all SEO / metadata output from src/config/portfolio.ts:
 *   - <head> tags (title, description, canonical, Open Graph, X/Twitter, JSON-LD)
 *   - the <noscript> fallback content
 *   - /manifest.json, /robots.txt, /sitemap.xml (served in dev, emitted on build)
 *
 * The only environment input is the deployment URL (VITE_SITE_URL). When it
 * is empty, URL-dependent tags and the sitemap are omitted.
 */
import type { HtmlTagDescriptor, Plugin } from "vite";
import { navItems, person, site, socialProfiles } from "./src/config/portfolio";
import { palettes } from "./src/theme/palette";

/** Escapes text for safe use inside HTML content and attribute values. */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Builds a `<meta>` tag descriptor; numeric values are converted to strings. */
const meta = (attrs: Record<string, string | number>): HtmlTagDescriptor => ({
  tag: "meta",
  attrs: Object.fromEntries(Object.entries(attrs).map(([k, v]) => [k, String(v)])),
});

/** Meta/OG description, e.g. "Portfolio of …, Full Stack Engineer specializing in A, B, and C." */
const description = `Portfolio of ${person.name}, ${person.jobTitle} specializing in ${new Intl.ListFormat(
  "en",
  { type: "conjunction" }
).format(site.specialties)}.`;

/** Alt text for the social-card image; also the <noscript> heading. */
const imageAlt = `${person.name} — ${person.jobTitle}`;

/**
 * All `<head>` tags: title, description, icons, LCP preload, canonical,
 * Open Graph, X/Twitter card and JSON-LD (WebSite, WebPage, Person).
 * @param pageUrl - Absolute page URL; when empty, URL-dependent tags are skipped.
 */
function headTags(pageUrl: string): HtmlTagDescriptor[] {
  const ogImage = person.portrait;
  const xProfile = socialProfiles.find((profile) => profile.id === "x");
  const xHandle = xProfile ? `@${new URL(xProfile.url).pathname.replace(/^\/|\/$/g, "")}` : "";
  const id = (fragment: string) => `${pageUrl}#${fragment}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: pageUrl,
        name: site.name,
        description,
        inLanguage: site.language,
        publisher: { "@id": id("person") },
      },
      {
        "@type": "WebPage",
        "@id": id("webpage"),
        url: pageUrl,
        name: site.title,
        isPartOf: { "@id": id("website") },
        about: { "@id": id("person") },
        description,
        inLanguage: site.language,
      },
      {
        "@type": "Person",
        "@id": id("person"),
        name: person.name,
        url: pageUrl,
        image: person.portrait.src,
        jobTitle: person.jobTitle,
        email: `mailto:${person.email}`,
        address: {
          "@type": "PostalAddress",
          addressRegion: person.location.region,
          addressCountry: person.location.countryCode,
        },
        sameAs: socialProfiles.map((profile) => profile.url),
        knowsAbout: site.specialties,
      },
    ],
  };

  return [
    { tag: "title", children: escapeHtml(site.title) },
    meta({ name: "description", content: description }),
    meta({ name: "keywords", content: [person.name, person.jobTitle, ...site.specialties].join(", ") }),
    meta({ name: "author", content: person.name }),
    meta({ name: "theme-color", content: palettes.dark.background }),
    { tag: "link", attrs: { rel: "icon", type: "image/x-icon", href: site.favicon } },
    // The portrait is the LCP element but is only discovered after React renders.
    {
      tag: "link",
      attrs: { rel: "preload", as: "image", href: person.portrait.src, fetchpriority: "high" },
    },
    ...(pageUrl ? [{ tag: "link", attrs: { rel: "canonical", href: pageUrl } }] : []),

    meta({ property: "og:type", content: "website" }),
    meta({ property: "og:locale", content: site.locale }),
    meta({ property: "og:site_name", content: site.name }),
    meta({ property: "og:title", content: site.title }),
    meta({ property: "og:description", content: description }),
    ...(pageUrl ? [meta({ property: "og:url", content: pageUrl })] : []),
    meta({ property: "og:image", content: ogImage.src }),
    meta({ property: "og:image:alt", content: imageAlt }),
    meta({ property: "og:image:width", content: ogImage.width }),
    meta({ property: "og:image:height", content: ogImage.height }),

    meta({ name: "twitter:card", content: "summary_large_image" }),
    meta({ name: "twitter:title", content: site.title }),
    meta({ name: "twitter:description", content: description }),
    meta({ name: "twitter:image", content: ogImage.src }),
    meta({ name: "twitter:image:alt", content: imageAlt }),
    ...(xHandle ? [meta({ name: "twitter:creator", content: xHandle })] : []),

    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      // "<" is escaped so the JSON can never close the <script> element.
      children: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    },
  ];
}

/**
 * `<noscript>` fallback with the name, description, email and section links,
 * so crawlers and visitors without JavaScript still get the key content.
 */
function noscriptTag(): HtmlTagDescriptor {
  const email = escapeHtml(person.email);
  const links = navItems
    .map(({ id, label }) => `<li><a href="#${id}">${escapeHtml(label)}</a></li>`)
    .join("");

  return {
    tag: "noscript",
    injectTo: "body-prepend",
    children:
      `<main><h1>${escapeHtml(imageAlt)}</h1>` +
      `<p>${escapeHtml(description)}</p>` +
      `<p>Please enable JavaScript to view the interactive portfolio, or contact ` +
      `<a href="mailto:${email}">${email}</a>.</p>` +
      `<ul>${links}</ul></main>`,
  };
}

/**
 * Generated root files keyed by file name: manifest.json, robots.txt and,
 * when a base URL is known, sitemap.xml.
 * @param baseUrl - Site URL without a trailing slash, or "".
 */
function staticFiles(baseUrl: string): Record<string, { type: string; body: string }> {
  const files: Record<string, { type: string; body: string }> = {
    "manifest.json": {
      type: "application/manifest+json",
      body: JSON.stringify(
        {
          short_name: site.name,
          name: site.title,
          description,
          icons: [{ src: site.favicon, sizes: "96x96 64x64 32x32 24x24 16x16", type: "image/x-icon" }],
          start_url: "/",
          scope: "/",
          display: "standalone",
          theme_color: palettes.dark.background,
          background_color: palettes.dark.background,
          lang: site.language,
          categories: ["portfolio", "personalization", "productivity"],
        },
        null,
        2
      ),
    },
    "robots.txt": {
      type: "text/plain",
      body: `User-agent: *\nAllow: /\n${baseUrl ? `\nSitemap: ${baseUrl}/sitemap.xml\n` : ""}`,
    },
  };

  if (baseUrl) {
    files["sitemap.xml"] = {
      type: "application/xml",
      body:
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `  <url>\n    <loc>${baseUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n` +
        `</urlset>\n`,
    };
  }

  return files;
}

/**
 * Vite plugin that injects the SEO tags into index.html and serves (dev) or
 * emits (build) the generated root files.
 * @param siteUrl - Deployment URL from VITE_SITE_URL; may be empty.
 */
export default function seoPlugin(siteUrl: string): Plugin {
  const baseUrl = siteUrl.trim().replace(/\/$/, "");
  const pageUrl = baseUrl ? `${baseUrl}/` : "";
  const files = staticFiles(baseUrl);

  return {
    name: "portfolio-seo",
    // Appended (not prepended) so <meta charset> stays within the first 1024 bytes.
    transformIndexHtml: () => [
      ...headTags(pageUrl).map((tag): HtmlTagDescriptor => ({ ...tag, injectTo: "head" })),
      noscriptTag(),
    ],
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = files[(req.url ?? "").split("?")[0].replace(/^\//, "")];
        if (!file) return next();
        res.setHeader("Content-Type", file.type);
        res.end(file.body);
      });
    },
    generateBundle() {
      for (const [fileName, file] of Object.entries(files)) {
        this.emitFile({ type: "asset", fileName, source: file.body });
      }
    },
  };
}
