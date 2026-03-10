import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

test("renders Todo heading", () => {
  render(<App />);
  const heading = screen.getByText("Todo App");
  expect(heading).toBeInTheDocument();
});