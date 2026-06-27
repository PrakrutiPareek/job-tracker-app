import {deleteJob} from "../../api/savedjobsApi";
import {toast} from "react-toastify";

const handleDeleteJob = async (id, setSavedJobs) => {
  try {
    await deleteJob(id);
    //update savedjobs after deletion
    setSavedJobs((prevJobs) => {
      return prevJobs.filter((job) => job.id !== id);
    });

    toast.success("Job deleted successfully");
    return true;
  } catch {
    toast.error("Failed to delete job");
    return false;
  }
};

export default handleDeleteJob;
