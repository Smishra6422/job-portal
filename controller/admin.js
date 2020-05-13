const Job = require("../model/job");
const AcceptJob = require("../model/acceptjob");
const RejectJob = require("../model/rejectjob");
const axios = require("axios");

exports.postAddJob = (req, res) => {
  const {
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  } = req.body;

  const job = new Job({
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  });
  job
    .save()
    .then((result) => {
      console.log("result");
      res.redirect("http://localhost:3000/");
    })
    .catch((err) => console.log(err));
};

exports.postAddAcceptJob = (req, res) => {
  const {
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  } = req.body;

  const acceptJob = new AcceptJob({
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  });
  acceptJob
    .save()
    .then((result) => {
      console.log(result);

      res.send(result.jobTitle);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.postAddRejectJob = (req, res) => {
  const {
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  } = req.body;

  const rejectJob = new RejectJob({
    jobTitle,
    companyName,
    location,
    jobId,
    experience,
    workTime,
    candidateCount,
    salary,
  });
  rejectJob
    .save()
    .then((result) => {
      console.log("result");
      res.send(result.jobTitle);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
