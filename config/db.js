const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Optimize for serverless environment (Vercel)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 5,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
