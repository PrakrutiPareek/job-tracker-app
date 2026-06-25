const express = require("express");

const { saveJob } = require("../controllers/jobsSavedController");
const { getSavedJobs } = require("../controllers/jobsSavedController"); 
const router = express.Router();

router.post("/savejob", saveJob);
router.get("/savedjobs", getSavedJobs);
module.exports = router;