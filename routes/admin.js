const express = require("express");
const {
  postAddJob,
  postAddAcceptJob,
  postAddRejectJob,
} = require("../controller/admin");

const route = express.Router();

route.post("/addjob", postAddJob);
route.post("/addacceptjob", postAddAcceptJob);
route.post("/addrejectjob", postAddRejectJob);

module.exports = route;
