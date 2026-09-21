import { render, screen } from "@testing-library/react";
import App from "./App";
import { GlobalValuesProvider } from "./store/GlobalStateContext";

test("renders portfolio name", () => {
  render(
    <GlobalValuesProvider>
      <App />
    </GlobalValuesProvider>
  );
  expect(
    screen.getByRole("heading", { name: /Albin Antony/i })
  ).toBeInTheDocument();
});
