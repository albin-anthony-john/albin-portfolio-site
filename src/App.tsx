import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      </header>
      <main id="main-content">
        <FadeIn transitionDuration={700}>
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
