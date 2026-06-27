import {render, screen} from "@testing-library/react";
import {vi, test} from "vitest";
import {MemoryRouter} from "react-router-dom";
import Applications from "../Pages/Applications";

vi.mock("../api/savedjobsApi", () => ({
  getsavedJobs: vi.fn().mockResolvedValue([]),
}));

test("renders Add Application button and heading", () => {
  render(
    <MemoryRouter>
      <Applications />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole("button", {name: /\+ add application/i}),
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {name: /applications/i}),
  ).toBeInTheDocument();
});

test("shows JobSearch link in empty state", async () => {
  render(
    <MemoryRouter>
      <Applications />
    </MemoryRouter>,
  );

  expect(
    await screen.getByRole("link", {name: /jobsearch/i}),
  ).toBeInTheDocument();
});
