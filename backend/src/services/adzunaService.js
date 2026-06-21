// External API: Service to interact with the Adzuna API for job listings
const axios = require("axios");
// const { param } = require("../routes/jobs");
const getJobs = async (keyword, location) => {
  try {
    const response = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1`,
      {
        params: {
          app_id: process.env.ADZUNA_APP_ID,
          app_key: process.env.ADZUNA_APP_KEY,
          what: keyword,
          where: location,
          results_per_page: 10,
          // content_type: "application/json",
        },
      },
    );
   
    return response.data.results;
  } catch (error) {
    console.error("Adzuna Error:", error.response?.data);
    throw error;
  }
};
console.log("APP_ID:", process.env.ADZUNA_APP_ID);
console.log("APP_KEY:", process.env.ADZUNA_APP_KEY);

module.exports = {
  getJobs,
};
