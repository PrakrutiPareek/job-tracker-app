import { render, screen } from "@testing-library/react";
import CallToAction from "../Components/CallToAction";

test("renders call-to-action heading", () => {
  render(<CallToAction />);

  expect(
    screen.getByText(/start feeling at ease with jobease/i),
  ).toBeInTheDocument();
});