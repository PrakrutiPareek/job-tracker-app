import { useState } from "react";
import { toast } from "react-toastify";

import { validateProfileForm } from "../Utils/profileValidation";
import { profileFields } from "../constants/profileFields";

import FormInput from "../components/profile/FormInput";
import ExperienceSelect from "../components/profile/ExperienceSelect";
import ProfilePhotoSection from "../components/profile/ProfilePhotoSection";

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
  const handleChange = ({ target: { name, value } }) => {
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

      console.log("Profile Saved", formData);

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
    <div className="px-4 sm:p-6 md:px-8 lg:px-56">
      {/* Header */}

      <h1 className="text-(--yellow) text-2xl font-bold  mb-6 text-center md:text-left">
        Profile Information
      </h1>

      {/* Card */}

      <div className="bg-(--navy-blue) rounded-2xl p-4 sm:p-2 md:p-4">
        <ProfilePhotoSection />

        <h2 className="text-(--yellow) text-xl font-semibold px-18 mb-6 mt-6 text-center md:text-left">
          User Details
        </h2>

        <form className="text-(--white) text-md" onSubmit={handleSubmit}>
          <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-4">
     
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

          <div className="mt-8 px-12">
            <FormInput
              {...profileFields[2]}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className="mt-4 px-12">
            <FormInput
              {...profileFields[3]}
              value={formData.jobRole}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4 px-24">
            <ExperienceSelect
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center md:justify-end mt-6">
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
    </div>
  );
}
