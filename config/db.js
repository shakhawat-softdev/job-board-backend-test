const mongoose = require("mongoose");

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }

  try {
    // Optimize for serverless environment (Vercel)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 5,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    });
    cachedConnection = conn;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;
