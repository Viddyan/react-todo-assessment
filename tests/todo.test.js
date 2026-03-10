import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../src/App";

test("renders Todo heading", () => {
  render(<App />);
  const heading = screen.getByText("Todo App");
  expect(heading).toBeInTheDocument();
});

test("adds new todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("deletes todo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  const deleteBtn = screen.getByText("Delete");
  fireEvent.click(deleteBtn);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});