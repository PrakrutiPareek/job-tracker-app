import { fireEvent, render, screen } from "@testing-library/react";
import MobileMenuButton from "../Components/UI/MobileMenuButton";

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();

  render(
    <MobileMenuButton
      isOpen={false}
      onClick={handleClick}
      controls="primary-navigation"
    />,
  );

  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});