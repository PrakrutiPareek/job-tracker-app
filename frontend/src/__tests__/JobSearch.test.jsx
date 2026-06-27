import { render, screen } from "@testing-library/react";
import { test, expect} from "vitest";

import JobSearch from "../Pages/JobSearch";

// Renders the page heading and empty state
test("renders Job Search page with empty state", () => {
  render(<JobSearch />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /job search/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/no jobs found matching your criteria/i),
  ).toBeInTheDocument();
});

// Shows validation error when searching with empty inputs

test("renders page heading", () => {
  render(<JobSearch />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /job search/i,
    }),
  ).toBeInTheDocument();
});

test("shows no jobs message", () => {
  render(<JobSearch />);

  expect(
    screen.getByText(/no jobs found matching your criteria/i),
  ).toBeInTheDocument();
});
