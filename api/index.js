require("dotenv").config();
const app = require("../app");
const connectDB = require("../config/db");

module.exports = async (req, res) => {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error("Serverless invocation failed:", error.message);
    return res.status(500).json({
      message: "Server initialization failed",
      error: error.message,
    });
  }
};
