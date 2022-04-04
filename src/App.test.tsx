import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // Create virtual DOM for argument JSX
  // Access virtual DOM via screen global

  const linkElement = screen.getByText(/learn react/i);
  // Find element by display text
  // 여기서는 regular expression을 인자로 넘겼다.

  expect(linkElement).toBeInTheDocument();
  // assertion, causes test to succeed or fail
});
