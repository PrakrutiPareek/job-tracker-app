
import { render, screen } from "@testing-library/react";
import Signup from "../Pages/Signup";
import { BrowserRouter } from "react-router-dom";

test("renders signup heading", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  expect(screen.getByText(/create an account/i)).toBeInTheDocument();
});

test("renders register button", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  expect(screen.getByText(/register/i)).toBeInTheDocument();
});