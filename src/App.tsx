/**
 * Root component: owns the colour mode, provides the MUI theme and lays out
 * the page (skip link, navigation, content sections, footer).
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import {
  Contact,
  Expertise,
  FadeIn,
  Footer,
  Hero,
  Navigation,
  Projects,
  Timeline,
} from "./components";
import type { ColorMode } from "./theme/palette";
import { createAppTheme } from "./theme/theme";

/** localStorage key that remembers the visitor's colour mode between visits. */
const MODE_STORAGE_KEY = "color-mode";

/**
 * Reads the saved colour mode.
 * @returns The stored mode, or `"dark"` when nothing is saved or storage is blocked.
 */
function readStoredMode(): ColorMode {
  try {
    return localStorage.getItem(MODE_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

/**
 * The whole single-page portfolio. Changing the mode rebuilds the theme,
 * which updates the `--pf-*` CSS variables used by the SCSS.
 */
export default function App() {
  const [mode, setMode] = useState<ColorMode>(readStoredMode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const toggleMode = useCallback(
    () => setMode((current) => (current === "dark" ? "light" : "dark")),
    []
  );

  useEffect(() => {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      // Storage unavailable (private mode / blocked): the toggle still works for this visit.
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header>
        <Navigation mode={mode} onToggleMode={toggleMode} />
      </header>
      <main id="main-content" tabIndex={-1}>
        <FadeIn>
          <Hero />
          <Expertise />
          <Timeline />
          <Projects />
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
