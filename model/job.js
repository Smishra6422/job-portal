const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
    maxlength: 25,
  },
  companyName: {
    type: String,
    required: true,
    maxlength: 40,
  },
  location: {
    type: String,
    required: true,
    maxlength: 100,
  },
  jobId: {
    type: Number,
    required: true,
    unique: true,
  },
  experience: {
    type: String,
    required: true,
    maxlength: 15,
  },
  workTime: {
    type: String,
    required: true,
    maxlength: 20,
  },
  candidateCount: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
