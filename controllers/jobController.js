const Job = require("../models/Job");

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find().sort({ created_at: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

exports.createJob = async (req, res, next) => {
  try {
    const {
      title,
      company,
      logo,
      location,
      category,
      type,
      salary,
      description,
      tags,
    } = req.body;

    if (!title || !company) {
      return res
        .status(400)
        .json({ message: "Title and company are required" });
    }

    const job = await Job.create({
      title,
      company,
      logo,
      location,
      category,
      type,
      salary,
      description,
      tags: tags || [],
    });

    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const {
      title,
      company,
      logo,
      location,
      category,
      type,
      salary,
      description,
      tags,
    } = req.body;
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Update only provided fields
    if (title !== undefined) job.title = title;
    if (company !== undefined) job.company = company;
    if (logo !== undefined) job.logo = logo;
    if (location !== undefined) job.location = location;
    if (category !== undefined) job.category = category;
    if (type !== undefined) job.type = type;
    if (salary !== undefined) job.salary = salary;
    if (description !== undefined) job.description = description;
    if (tags !== undefined) job.tags = tags;

    await job.save();
    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.deleteOne();

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    next(error);
  }
};
