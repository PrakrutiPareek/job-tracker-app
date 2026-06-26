const db = require("../db/database"); // Import the database connection

// Save a job to the database
const saveJob = (req, res) => {
  //extract job data from request body
  console.log("Incoming request body:", req.body); // Log the incoming request body for debugging
  const {jobId, jobRole, company, location, salary, url} = req.body;
  console.log("Received job data:", req.body);

  try {
    // Insert the job data into the saved_jobs table
    const savedjob = db.prepare(`
            INSERT INTO saved_jobs (jobId, jobRole, company, location, salary, url)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
    const result = savedjob.run(jobId, jobRole, company, location, salary, url); // save the job data to db
    console.log("Job saved result:", result); // Log the saved job data
    // After saving successfully, send a success response
    res.status(201).json({message: "Job saved successfully"});
  } catch (error) {
    // Handle unique constraint violation (already saved job)
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      res.status(400).json({message: "Job already saved"});
    } else {
      res.status(500).json({message: "Error saving job", error: error.message});
    }
  }
};

// Fetch all saved jobs from the  sqllite db
const getSavedJobs = (req, res) => {
  try {
    const savedJobs = db.prepare("SELECT * FROM saved_jobs").all(); // Fetch all the saved jobs from the db
    res.status(200).json(savedJobs); // Send the saved jobs as a JSON response
  } catch (error) {
    res
      .status(500)
      .json({message: "Error in fetching saved jobs", error: error.message});
  }
};

//delete jobs
const deleteJob = (req, res) => {
  const {id} = req.params;

  try {
    const deletedJob = db.prepare("DELETE FROM saved_jobs WHERE id = ?");

    const result = deletedJob.run(id);

    if (result.changes === 0) {
      return res.status(404).json({message: "Job not found"});
    }
    res.status(200).json({message: "Job deleted successfully"});
  } catch (error) {
    res
      .status(500)
      .json({message: "Error in deleting job", error: error.message});
  }
};

// module.exports = {getSavedJobs};
module.exports = {
  saveJob,
  getSavedJobs,
  deleteJob,
};
