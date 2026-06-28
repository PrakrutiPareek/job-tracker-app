import {savedJobsApi} from "../../api/savedjobsApi";
import {toast} from "react-toastify";

const handleManualFormSubmit = async (formData, onJobSave) => {
  try {
    await savedJobsApi(formData);

    if (onJobSave) {
      await onJobSave();
    }

    toast.success("Job Saved Successfully");
    return true;
  } catch {
    toast.error("Error saving job");
    return false;
  }
};

export default handleManualFormSubmit;
