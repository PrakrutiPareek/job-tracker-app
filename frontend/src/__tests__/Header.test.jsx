import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Components/UI/Header";

test("renders header brand and desktop navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(screen.getByText("JobEase")).toBeInTheDocument();
  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("PROFILE")).toBeInTheDocument();
  expect(screen.getByText("APPLICATIONS")).toBeInTheDocument();
});

test("opens mobile navigation when menu button is clicked", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  fireEvent.click(screen.getByRole("button", { name: /toggle navigation/i }));

  expect(screen.getAllByRole("link", { name: "LOG IN" })).toHaveLength(2);
  expect(screen.getAllByRole("link", { name: "SIGN UP" })).toHaveLength(2);
});