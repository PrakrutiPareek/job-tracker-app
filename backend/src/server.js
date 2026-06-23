// require("dotenv").config;
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const express = require("express");
const cors = require("cors");

const jobsRoute = require("./routes/jobs");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running ");
});
