import {useState} from "react";
import {X} from "lucide-react";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            required
            className="w-full border border-(--yellow) rounded-md p-2 mb-3"
          />
          <label htmlFor="company">
            Company <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border border-(--yellow) rounded-md p-2 mb-3"
          />
          <div className="flex gap-4">
            <label htmlFor="date">
              Date<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
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
          <div className="flex gap-4">
            <label htmlFor="source">
              Source<span className="text-red-600 font-bold">*</span>
            </label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-1/2 border border-(--yellow) rounded-md p-2 mb-3"
              required
            >
              <option value="Adzuna">Adzuna</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="CV-Library">CV-Library</option>
              <option value="Company-site">Company-site</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-1/2 border border-(--yellow) rounded-md p-2 mb-3"
            >
              <option value="Saved">Saved</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-(--yellow) rounded-md p-2 mb-3"
          />

          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={onClose}
              className="bg-(--yellow) text-(--black) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-(--yellow) text-(--black) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualApplicationForm;
