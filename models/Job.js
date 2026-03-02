const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    salary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model("Job", jobSchema);
