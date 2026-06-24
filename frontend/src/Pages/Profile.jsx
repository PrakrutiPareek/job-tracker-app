import {useState} from "react";
import {toast} from "react-toastify";

import {validateProfileForm} from "../Utils/profileValidation";
import {profileFields} from "../constants/profileFields";

import FormInput from "../components/profile/FormInput";
import ExperienceSelect from "../Components/Profile/ExperienceSelect";
// import ProfilePhotoSection from "../components/profile/ProfilePhotoSection";

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

      // TODO: API Call

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

      <div className="bg-(--navy-blue) rounded-2xl p-4 sm:p-2 md:p-4 max-w-svh">
        <form className="text-md" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {profileFields.slice(0, 2).map((field) => (
              <FormInput
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ))}
          </div>

          <div className="mt-4">
            <FormInput
              {...profileFields[2]}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className="mt-4">
            <FormInput
              {...profileFields[3]}
              value={formData.jobRole}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <ExperienceSelect
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center md:justify-end mt-6 px-12">
            <button
              type="submit"
              disabled={!hasChanges || loading}
              className="
                w-full
                md:w-auto
                bg-(--yellow)
                text-(--black)
                px-8
                py-3
                rounded
                font-semibold
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
