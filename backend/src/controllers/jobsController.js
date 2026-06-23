// Handles job-related requests and responses
const adzunaService = require("../services/adzunaService");

// search jobs based on query parameters
const searchJobs = async (req, res) => {
  try {
    const { keyword, location } = req.query;

    const jobs = await adzunaService.getJobs(keyword, location);
    res.status(200).json(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to search jobs", error: error.message });
  }
};


module.exports = {
  searchJobs,
};