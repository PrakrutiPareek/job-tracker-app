import {useState} from "react";
import {X} from "lucide-react";
import Button from "../Button";
import {manualFormValidation} from "../../utils/manualFormValidation";

const ManualApplicationForm = ({isOpen, onClose, onSubmit}) => {
  const [formData, setFormData] = useState({
    jobRole: "",
    company: "",
    date: "",
    source: "",
    status: "",
    location: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({target: {name, value}}) => {
    // Update form data, set hasChanges to true, and clear any existing error for the changed field
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field that changed
    }));

    // Clear error for the changed field if it exists
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validations
    const validationErrors = manualFormValidation(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);

    setFormData({
      jobRole: "",
      company: "",
      date: "",
      source: "",
      status: "",
      location: "",
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
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-(--navy-blue) p-6 shadow-xl">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-extrabold">Add Application</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="jobRole">
            Job Role <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className={`w-full border rounded-md p-2 mb-3 ${errors.jobRole ? "border-red-500" : "border-(--yellow)"}`}
          />
          {errors.jobRole && (
            <p className="text-red-500 mb-3 text-sm">{errors.jobRole}</p>
          )}
          <label htmlFor="company">
            Company <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full border rounded-md p-2 mb-3 ${errors.company ? "border-red-500" : "border-(--yellow)"}`}
          />
          {errors.company && (
            <p className="text-red-500 mb-3 text-sm">{errors.company}</p>
          )}

          <div className="flex gap-4">
            <label htmlFor="source">
              Source<span className="text-red-600 font-bold">*</span>
            </label>
            <select
              name="source"
              id="source"
              value={formData.source}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 mb-3 ${errors.company ? "border-red-500" : "border-(--yellow)"} [&>option]:text-(--black)`}
            >
              <option value="">Select Source</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="CV-Library">CV-Library</option>
              <option value="Company-site">Company-site</option>
              <option value="Other">Other</option>
            </select>
            {errors.source && (
              <p className="text-red-500 mb-3 text-sm">{errors.source}</p>
            )}

            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-1/2 border border-(--yellow) rounded-md p-2 mb-3 [&>option]:text-(--black)"
            >
              <option value="">Select Status</option>
              <option value="Saved">Saved</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="flex gap-4">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 border border-(--yellow) rounded-md p-2 mb-3"
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-1/2 border border-(--yellow) rounded-md p-2 mb-3"
            />
          </div>

          <label htmlFor="jobUrl">Job URL</label>
          <input
            type="text"
            name="jobUrl"
            value={formData.jobUrl}
            onChange={handleChange}
            className="w-full border border-(--yellow) rounded-md p-2 mb-3"
          />

          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-(--yellow) rounded-md p-2 mb-3"
          />

          <div className="flex justify-end gap-2 mt-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualApplicationForm;
