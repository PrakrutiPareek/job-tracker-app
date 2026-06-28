import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../Components/UI/Sidebar";

vi.mock("../Components/LogoutBtn", () => ({
  default: () => <button>Logout</button>,
}));

test("renders sidebar brand and navigation links", () => {
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>,
  );

  expect(screen.getByText("JobEase")).toBeInTheDocument();
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("Application Tracker")).toBeInTheDocument();
  expect(screen.getByText("Job Search")).toBeInTheDocument();
  expect(screen.getByText("Logout")).toBeInTheDocument();
});

test("calls onClose when close button is clicked", () => {
  const handleClose = vi.fn();

  render(
    <MemoryRouter>
      <Sidebar isOpen={true} onClose={handleClose} />
    </MemoryRouter>,
  );

  fireEvent.click(screen.getByRole("button", { name: /close sidebar/i }));

  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("calls onClose when a navigation link is clicked", () => {
  const handleClose = vi.fn();

  render(
    <MemoryRouter>
      <Sidebar isOpen={true} onClose={handleClose} />
    </MemoryRouter>,
  );

  fireEvent.click(screen.getByText("Profile"));

  expect(handleClose).toHaveBeenCalledTimes(1);
});