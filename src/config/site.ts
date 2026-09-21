export const siteConfig = {
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
    "https://albinantony.dev",
  name: (import.meta.env.VITE_SITE_NAME as string | undefined) || "Albin Antony",
  title:
    (import.meta.env.VITE_SITE_TITLE as string | undefined) ||
    "Albin Antony | Full Stack Engineer",
  description:
    (import.meta.env.VITE_SITE_DESCRIPTION as string | undefined) ||
    "Portfolio of Albin Antony, Full Stack Engineer specializing in .NET, React, TypeScript, DevOps, and Avalonia desktop apps.",
  email: "albinantony@dbcyelagiri.edu.in",
  jobTitle: "Full Stack Engineer",
  locale: "en_IN",
  imagePath: "/og-image.png",
  keywords: [
    "Albin Antony",
    "Full Stack Engineer",
    "React",
    ".NET",
    "TypeScript",
    "Avalonia",
    "DevOps",
    "Portfolio",
    "Tamil Nadu",
    "India",
  ],
} as const;

export const absoluteUrl = (path = "/") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
};
