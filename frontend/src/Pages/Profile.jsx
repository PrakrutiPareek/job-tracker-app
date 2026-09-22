import {toast} from "react-toastify";
import {useState} from "react";
import {validateProfileForm} from "../utils/profileValidation";
import ProfileForm from "../Components/Profile/ProfileForm";
const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  jobRole: "",
  experience: "",
};

export default function Profile() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  // Handle input changes and clear errors for the changed field
  const handleChange = ({target: {name, value}}) => {
    // Update form data, set hasChanges to true, and clear any existing error for the changed field
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field that changed
    }));
    setHasChanges(true);

    // Clear error for the changed field if it exists
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateProfileForm(formData);
    // If there are validation errors,  do not proceed with submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);

      toast.success("Profile updated successfully!");

      setHasChanges(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="mt-10 mx-12 flex flex-col items-center">
      {/* Header */}

      <h1 className="text-[28px] font-bold font-headings text-(--yellow) mb-10 self-start">
        Profile Information
      </h1>

      {/* Card */}
      <ProfileForm
        formData={formData}
        errors={errors}
        loading={loading}
        hasChanges={hasChanges}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
