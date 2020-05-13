const Job = require("../model/job");
const AcceptJob = require("../model/acceptjob");
const RejectJob = require("../model/rejectjob");

exports.getJob = async (req, res) => {
  const job = await Job.find();
  res.send(job);
};

exports.getAcceptJob = async (req, res) => {
  const job = await AcceptJob.find();
  res.send(job);
};

exports.getRejectJob = async (req, res) => {
  const job = await RejectJob.find();
  res.send(job);
};
