import Button from "../Button";
import FormInput from "./FormInput";
import ExperienceSelect from "../Profile/ExperienceSelect";
import { profileFields } from "../../constants/profileFields";
export default function ProfileForm({
  formData,
  errors,
  loading,
  hasChanges,
  onChange,
  onSubmit,
}) {
  return (
    <div className="bg-(--navy-blue) rounded-2xl p-4 sm:p-2 md:p-4 max-w-svh">
      <form className="text-md" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {profileFields.slice(0, 2).map((field) => (
            <FormInput
              key={field.name}
              {...field}
              value={formData[field.name]}
              error={errors[field.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <div className="mt-4">
          <FormInput
            {...profileFields[2]}
            value={formData.email}
            error={errors.email}
            onChange={onChange}
          />
        </div>

        <div className="mt-4">
          <FormInput
            {...profileFields[3]}
            value={formData.jobRole}
            onChange={onChange}
          />
        </div>

        <div className="mt-4">
          <ExperienceSelect value={formData.experience} onChange={onChange} />
        </div>

        <div className="flex justify-center md:justify-end mt-6 px-12">
          <Button
            type="submit"
            disabled={!hasChanges || loading}
            className="hover:text-(--white) disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
