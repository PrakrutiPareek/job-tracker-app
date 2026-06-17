export const validateProfileForm = (formData) => {
  const errors = {};
  if (!formData.firstName.trim()) {
    errors.firstName = "First Name is required";
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) // email regex validation.
    // This regex checks for a basic email format: it ensures that there is some text before the "@" symbol, followed by a domain name and a top-level domain (like .com, .net, etc.).
    // It does not allow spaces in the email address.
  ) {
    errors.email = "Please enter a valid email";
  }

  if (!formData.jobRole.trim()) {
    errors.jobRole = "Job Role is required";
  }
  if (!formData.experience.trim()) {
    errors.experience = "Please enter your total experience in years";
  }
  return errors;
};
