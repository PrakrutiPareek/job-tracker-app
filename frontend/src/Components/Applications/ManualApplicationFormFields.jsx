import ManualFormButton from "./ManualFormButton";
import ManualApplicationFormInput from "./ManualApplicationFormInput";
import SourceSelect from "./SourceSelect";
import StatusSelect from "./StatusSelect";
import {textFields} from "../../constants/ManualFormTextFields";

const ManualApplicationFormFields = ({
  formData,
  errors,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {textFields.slice(0, 2).map((field) => (
        <ManualApplicationFormInput
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={onChange}
          error={errors[field.name]}
        />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SourceSelect
          value={formData.source}
          onChange={onChange}
          error={errors.source}
        />
        <StatusSelect
          value={formData.status}
          onChange={onChange}
          error={errors.status}
        />
      </div>

      {textFields.slice(2).map((field) => (
        <ManualApplicationFormInput
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={onChange}
          error={errors[field.name]}
        />
      ))}

      <div className="mt-2 px-4 sm:px-6">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={onChange}
          className="w-full border border-(--yellow) rounded-md p-2 mb-3"
        />
      </div>

      <ManualFormButton onClick={onCancel} />
    </form>
  );
};

export default ManualApplicationFormFields;
