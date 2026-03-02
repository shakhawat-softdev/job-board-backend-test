
const Application = require("../models/Application");
const Job = require("../models/Job");

exports.submitApplication = async (req, res, next) => {
  try {
    const { job_id, name, email, resume_link, cover_note } = req.body;

    if (!job_id || !name || !email) {
      return res.status(400).json({
        message: "job_id, name, and email are required",
      });
    }

    const job = await Job.findById(job_id);

    if (!job) {
      return res.status(404).json({ message: "Job does not exist" });
    }

    const application = await Application.create({
      job_id,
      name,
      email,
      resume_link,
      cover_note,
    });

    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
};
