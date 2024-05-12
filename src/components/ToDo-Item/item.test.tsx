import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoItem from ".";
import { vitest } from "vitest";

test("renders ToDoItem component", () => {
  const { getByText } = render(<ToDoItem id={1} completed={false} task="Test Task" onChange={() => {}} />);
  const taskElement = getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});

test("toggles task completion when clicked", () => {
  const mockOnChange = vitest.fn();
  const { getByRole } = render(<ToDoItem id={1} completed={false} task="Test Task" onChange={mockOnChange} />);
  const checkboxElement = getByRole("checkbox");
  fireEvent.click(checkboxElement);
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});
