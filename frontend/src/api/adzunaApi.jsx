import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;
export const fetchJobListings = async (keyword, location) => {
  if (!API_URL) {
    throw new Error(
      "API URL is missing. Please Check environment configuration.",
    );
  }
  const response = await axios.get(`${API_URL}/api/jobs/search`, {
    params: {
      keyword,
      location,
    },
  });
  return response.data;
};
