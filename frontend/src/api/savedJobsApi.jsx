import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const savedJobsApi = async(job) => {

    if(!API_URL) {
        throw new Error("API URL is missing. Please Check environment configuration.");
    }
    // Make a POST request to the backend API to save a job
    const response = await axios.post(`${API_URL}/api/jobs/savejob`, job);
    return response.data;
}



export default savedJobsApi