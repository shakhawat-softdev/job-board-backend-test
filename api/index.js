require("dotenv").config();
const app = require("../app");
const connectDB = require("../config/db");

// Connect to MongoDB
connectDB();

// Export the app as the default export for Vercel
module.exports = app;
