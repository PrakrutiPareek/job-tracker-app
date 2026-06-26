const express = require("express");

const {
  saveJob,
  getSavedJobs,
  deleteJob,
} = require("../controllers/jobsSavedController");

const router = express.Router();

router.post("/savejob", saveJob);
router.get("/savedjobs", getSavedJobs);
router.delete("/savedjobs/:id", deleteJob);

module.exports = router;
