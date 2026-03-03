const express = require("express");
const cors = require("cors");

const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Job Board API is running",
    endpoints: {
      auth: {
        register: "/api/auth/register",
        login: "/api/auth/login",
      },
      jobs: "/api/jobs",
      applications: "/api/applications",
    },
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
