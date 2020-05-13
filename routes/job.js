const express = require("express");
const { getJob, getAcceptJob, getRejectJob } = require("../controller/job");

const route = express.Router();

route.get("/getjob", getJob);
route.get("/getacceptjob", getAcceptJob);
route.get("/getrejectjob", getRejectJob);

module.exports = route;
