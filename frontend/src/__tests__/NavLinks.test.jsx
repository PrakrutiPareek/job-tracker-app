import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavLinks from "../Components/NavLinks";

const links = [
  { path: "/", label: "HOME" },
  { path: "/profile", label: "PROFILE" },
];

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <NavLinks links={links} />
    </MemoryRouter>,
  );

  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("PROFILE")).toBeInTheDocument();
});