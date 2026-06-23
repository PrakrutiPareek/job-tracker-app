// Handles route definitions for job-related endpoints

const express = require("express");
const router = express.Router(); // Create a new router instance
const { searchJobs } = require("../controllers/jobsController");

router.get("/search", searchJobs); // Define a GET route for searching jobs

module.exports = router; // Export the router for use in the main application
