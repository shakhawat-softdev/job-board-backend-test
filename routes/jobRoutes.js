const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);
router.post("/", adminMiddleware, jobController.createJob);
router.patch("/:id", adminMiddleware, jobController.updateJob);
router.delete("/:id", adminMiddleware, jobController.deleteJob);

module.exports = router;
