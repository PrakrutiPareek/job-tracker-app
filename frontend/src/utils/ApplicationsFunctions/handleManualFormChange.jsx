const handleManualFormChange = (event, setFormData, setErrors) => {
  const {name, value} = event.target;

  // Update form data, set hasChanges to true, and clear any existing error for the changed field
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => {
    if (!prev[name]) return prev;
    return {
      ...prev,
      [name]: "",
    };
  });
};

export default handleManualFormChange;
