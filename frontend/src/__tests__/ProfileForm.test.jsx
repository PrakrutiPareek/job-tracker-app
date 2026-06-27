import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ProfileForm from "../components/Profile/ProfileForm";

const defaultProps = {
  formData: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    jobRole: "Frontend Developer",
    experience: "2",
  },
  errors: {},
  loading: false,
  hasChanges: false,
  onChange: vi.fn(),
  onSubmit: vi.fn(),
};

describe("ProfileForm", () => {
  test("renders Save Changes button", () => {
    render(<ProfileForm {...defaultProps} />);

    expect(
      screen.getByRole("button", { name: /save changes/i })
    ).toBeInTheDocument();
  });

  test("disables Save Changes button when there are no changes", () => {
    render(<ProfileForm {...defaultProps} />);

    expect(
      screen.getByRole("button", { name: /save changes/i })
    ).toBeDisabled();
  });
});