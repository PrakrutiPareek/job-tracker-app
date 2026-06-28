import {render, screen} from "@testing-library/react";
import Button from "../Components/UI//Button";

test("renders button text", () => {
  render(<Button>Register</Button>);
  expect(screen.getByText("Register")).toBeInTheDocument();
});
