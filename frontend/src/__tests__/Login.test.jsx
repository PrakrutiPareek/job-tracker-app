import { render, screen } from "@testing-library/react";
import Login from "../Pages/Login";
import { BrowserRouter } from "react-router-dom";

test("renders login button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByText(/log in/i)).toBeInTheDocument();
});

test("renders forgot password button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
});