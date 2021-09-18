const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  creator: String,
  title: String,
  description: String, 
  people: Array, // includes creator
  time: String, // includes both date and time
  duration: Number, // number of hours
  workoutType: String,
  location: String,
});

module.exports = mongoose.model("user", WorkoutSchema);