
import axios from "axios";
const getsavedJobs = async() => {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    if(!API_URL) {
        throw new Error("API URL is missing. Please Check environment configuration.");
    }
    // Make a GET request to the backend API to fetch all saved jobs
    const response = await axios.get(`${API_URL}/api/jobs/savedjobs`);
    return response.data;
}
  

export default getsavedJobs