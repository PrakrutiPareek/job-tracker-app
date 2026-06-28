import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Pages/Home";

test("renders home hero content", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  expect(screen.getByText("Job Application Tracker")).toBeInTheDocument();
  expect(
    screen.getByText(/Job interviews can be nerve-racking/i),
  ).toBeInTheDocument();
});

test("renders register link", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole("link", { name: /create a jobease account/i }),
  ).toBeInTheDocument();
});