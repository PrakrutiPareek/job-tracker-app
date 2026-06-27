import {savedJobsApi} from "../../api/savedjobsApi";
import {toast} from "react-toastify";

const handleManualFormSubmit = async (formData, onJobSave) => {
  try {
    await savedJobsApi(formData);

    if (onJobSave) {
      await onJobSave();
    }

    toast.success("Successfully saved th job");
    return true;
  } catch {
    toast.error("Error saving job");
    return false;
  }
};

export default handleManualFormSubmit;
