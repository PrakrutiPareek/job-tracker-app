import {useState} from "react";
import {X} from "lucide-react";
import {manualFormValidation} from "../../utils/manualFormValidation";
import handleManualFormChange from "../../utils/ApplicationsFunctions/handleManualFormChange";
import handleManualFormSubmit from "../../utils/ApplicationsFunctions/handleManualFormSubmit";
import ManualApplicationFormFields from "./ManualApplicationFormFields";

const ManualApplicationForm = ({isOpen, onClose, onJobSave}) => {
  const [formData, setFormData] = useState({
    jobRole: "",
    company: "",
    source: "",
    status: "",
    location: "",
    jobUrl: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    handleManualFormChange(event, setFormData, setErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validations
    const validationErrors = manualFormValidation(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const isSaved = await handleManualFormSubmit(formData, onJobSave);
    if (!isSaved) return;

    setFormData({
      jobRole: "",
      company: "",
      source: "",
      status: "",
      location: "",
      jobUrl: "",
      notes: "",
    });

    setErrors({});
    onClose();
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-stretch sm:items-center sm:justify-end bg-black/80 p-0 sm:p-4">
      <div className="h-[95vh] w-[100vh] overflow-y-auto rounded-xl bg-(--navy-blue) sm:p-7 p-6 shadow-xl sm:h-auto sm:w-full sm:max-w-2xl sm:max-h-[90vh]">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-extrabold">Add Application</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <ManualApplicationFormFields
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleClose}
        />
      </div>
    </div>
  );
};

export default ManualApplicationForm;
