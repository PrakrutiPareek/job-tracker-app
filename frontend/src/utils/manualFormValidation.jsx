export const manualFormValidation = (formData) => {
  const errors = {};
  if (!formData.jobRole.trim()) {
    errors.jobRole = "Job Role is required";
  }
  if (!formData.company.trim()) {
    errors.company = "Company is required";
  }
  if (!formData.source.trim()) {
    errors.source = "Source is required";
  }
  return errors;
};
