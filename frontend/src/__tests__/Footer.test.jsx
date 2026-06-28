import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Components/Footer";

test("renders footer navigation links", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

test("renders footer copyright", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(
    screen.getByText(/JobEase. All rights reserved./i),
  ).toBeInTheDocument();
});