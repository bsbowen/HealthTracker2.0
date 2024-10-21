const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Import routes (you'll create this in the next steps)
const userRoutes = require("./routes/user");
const calorieEntryRoutes = require("./routes/calorieEntries");
const exerciseLogRoutes = require("./routes/exerciseLogs");
const sleepRecordRoutes = require("./routes/sleepRecords");

// Use the routes
app.use("/api/users", userRoutes);
app.use("/api/calories", calorieEntryRoutes);
app.use("/api/exercise", exerciseLogRoutes);
app.use("/api/sleep", sleepRecordRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
