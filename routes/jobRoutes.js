const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);
// protected admin actions
router.post("/", protect, authorizeRoles("admin"), jobController.createJob);
router.patch("/:id", protect, authorizeRoles("admin"), jobController.updateJob);
router.delete("/:id", protect, authorizeRoles("admin"), jobController.deleteJob);

module.exports = router;
