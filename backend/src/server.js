const path = require("path");

// Load .env variables
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const express = require("express");
const cors = require("cors");

const jobsRoute = require("./routes/jobs"); // import the jobs route
const jobsSavedRoute = require("./routes/jobsSavedRoutes"); // import the saved jobs route

const app = express();

app.use(cors());
app.use(express.json());

// Use the imported routes for handling requests
app.use("/api/jobs", jobsRoute); // Use the jobs route for apply job requests
app.use("/api/jobs", jobsSavedRoute); // Use the saved jobs route for saved job requests

module.exports = app;

// Only start the server when running locally
if (require.main === module) {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
}
