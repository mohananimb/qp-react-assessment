import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todos from ".";

test("renders Todos component", () => {
  const { getByText, getByPlaceholderText } = render(<Todos />);
  const headingElement = getByText(/Todo App/i);
  expect(headingElement).toBeInTheDocument();

  const textareaElement = getByPlaceholderText(/Add new task/i);
  expect(textareaElement).toBeInTheDocument();
});

test("adds a new task when enter key is pressed", () => {
  const { getByPlaceholderText, getByText } = render(<Todos />);
  const textareaElement = getByPlaceholderText(/Add new task/i);
  fireEvent.change(textareaElement, { target: { value: "New Task" } });
  fireEvent.keyDown(textareaElement, { key: "Enter", code: "Enter" });
  expect(getByText(/New Task/i)).toBeInTheDocument();
});
