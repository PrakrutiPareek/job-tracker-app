import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const jobsApi = {
  //POST endpoint to create savedjobs
  saveJobs: async (job) => {
    if (!API_URL) {
      throw new Error(
        "API URL is missing. Please Check environment configuration.",
      );
    }
    // Make a POST request to the backend API to save a job
    const response = await axios.post(`${API_URL}/api/jobs/savejob`, job);
    return response.data;
  },

  //GET endpoint to read savedjobs
  getSavedJobs: async () => {
    if (!API_URL) {
      throw new Error(
        "API URL is missing. Please Check environment configuration.",
      );
    }
    // Make a POST request to the backend API to save a job
    const response = await axios.get(`${API_URL}/api/jobs/savedjobs`);
    return response.data;
  },

  //DELETE endpoint to delete savedjobs
  deleteJob: async (id) => {
    if (!API_URL) {
      throw new Error(
        "API URL is missing. Please Check environment configuration.",
      );
    }
    const response = await axios.delete(`${API_URL}/api/jobs/savedjobs/${id}`);
    return response.data;
  },
};

export default jobsApi;
