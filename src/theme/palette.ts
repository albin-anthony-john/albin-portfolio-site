/**
 * Colour tokens for both modes. Plain data so the build (manifest.json,
 * theme-color) can read it without pulling in MUI.
 */
import { CDN_BASE } from "../config/portfolio";

/** The two supported colour modes. */
export type ColorMode = "dark" | "light";

/** Brand purple, identical in both modes (accent bars, hover fills, skip link). */
export const BRAND_COLOR = "#5000ca";

/** Every colour (and colour-dependent asset) that differs between modes. */
export interface ModePalette {
  /** Page background; also the browser theme-color and manifest colours (dark mode). */
  background: string;
  /** Raised surfaces: inputs, drawer. */
  surface: string;
  /** Body text. Also drives every translucent border/tint via `--pf-ink`. */
  text: string;
  /** Readable brand tone on this background (links, eyebrows, focus). */
  accent: string;
  /** Form validation errors. */
  error: string;
  /** Hero section background image URL. */
  heroImage: string;
  /** Tint laid over the hero image to keep text readable. */
  heroOverlay: string;
  /** Fill behind the portrait. */
  avatarBackground: string;
  /** Ring around the portrait. */
  avatarBorder: string;
  /** Vertical line of the career timeline. */
  timelineLine: string;
  /** Box-shadow of the timeline cards. */
  timelineShadow: string;
}

/** Palette for each mode. theme.ts turns the active one into `--pf-*` CSS variables. */
export const palettes: Record<ColorMode, ModePalette> = {
  dark: {
    background: "#0d1116",
    surface: "#1a1f26",
    text: "#ffffff",
    accent: "#9b7dff",
    error: "#ff8a80",
    heroImage: `${CDN_BASE}/images/bg-dark.png`,
    heroOverlay: "rgba(0, 0, 0, 0.2)",
    avatarBackground: "#1a1428",
    avatarBorder: "rgba(255, 255, 255, 0.92)",
    timelineLine: "#ffffff",
    timelineShadow: "0 3px 0 #ddd",
  },
  light: {
    background: "#f8f9fa",
    surface: "#ffffff",
    text: "#0d1116",
    accent: BRAND_COLOR,
    error: "#d32f2f",
    heroImage: `${CDN_BASE}/images/bg-light.png`,
    heroOverlay: "transparent",
    avatarBackground: "#f3f0fa",
    avatarBorder: "rgba(13, 17, 22, 0.18)",
    timelineLine: "rgba(0, 0, 0, 0.08)",
    timelineShadow:
      "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  },
};
