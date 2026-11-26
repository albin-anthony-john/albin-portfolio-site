/**
 * Builds the MUI theme for a colour mode. Besides MUI's own palette, it
 * publishes the mode's colours as `--pf-*` CSS custom properties on :root,
 * which is how the SCSS files get their colours.
 */
import { createTheme } from "@mui/material/styles";
import { BRAND_COLOR, palettes, type ColorMode, type ModePalette } from "./palette";

/** Font stack: Lato first, then system UI fonts. */
const FONT_FAMILY = [
  '"Lato"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "sans-serif",
].join(",");

/** "#0d1116" -> "13 17 22", for `rgb(var(--pf-ink) / <alpha>)` in SCSS. */
function hexToRgbChannels(hex: string): string {
  const value = Number.parseInt(hex.slice(1), 16);
  return [value >> 16, (value >> 8) & 0xff, value & 0xff].join(" ");
}

/**
 * Mode-dependent CSS custom properties consumed by the SCSS files.
 * This is the only place colours reach the stylesheets.
 */
function cssVariables(p: ModePalette) {
  return {
    "--pf-brand": BRAND_COLOR,
    "--pf-bg": p.background,
    "--pf-surface": p.surface,
    "--pf-ink": hexToRgbChannels(p.text),
    "--pf-accent": p.accent,
    "--pf-hero-image": `url("${p.heroImage}")`,
    "--pf-hero-overlay": p.heroOverlay,
    "--pf-avatar-bg": p.avatarBackground,
    "--pf-avatar-border": p.avatarBorder,
    "--pf-timeline-line": p.timelineLine,
    "--pf-timeline-shadow": p.timelineShadow,
  };
}

/**
 * Creates the app's MUI theme.
 * @param mode - Colour mode to build the theme for.
 * @returns A theme whose CssBaseline also emits the `--pf-*` variables.
 */
export function createAppTheme(mode: ColorMode) {
  const p = palettes[mode];

  return createTheme({
    palette: {
      mode,
      primary: { main: p.accent },
      error: { main: p.error },
      background: { default: p.background, paper: p.surface },
      text: { primary: p.text },
    },
    typography: { fontFamily: FONT_FAMILY },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": cssVariables(p),
          body: { fontSize: "1.1rem" },
        },
      },
      MuiPaper: {
        // Dark-mode elevation overlays would tint the drawer/app bar.
        styleOverrides: { root: { backgroundImage: "none" } },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { backgroundColor: p.surface },
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px ${p.surface} inset`,
              WebkitTextFillColor: p.text,
              caretColor: p.text,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: p.text,
            color: p.background,
            "&:hover": { backgroundColor: BRAND_COLOR, color: "#ffffff" },
          },
        },
      },
    },
  });
}
