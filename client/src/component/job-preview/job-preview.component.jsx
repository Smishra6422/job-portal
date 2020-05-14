import React from "react";

import "./job-preview.style.scss";

const JobPreview = ({
  job,
  acceptJob,
  rejectJob,
  customButton,
  acceptedJob,
  rejectedJob,
  addCandidate,
  history,
}) => {
  return (
    <div className="job-container">
      <div className="job-image">
        <img src="/asset/businessman.svg" alt="Job" />
      </div>
      <div className="job-title">
        <p>{job.jobTitle}</p>
      </div>
      <div className="companny-name">
        <p>{job.companyName}</p>
      </div>
      <div className="job-location">
        <p>
          <i class="fa fa-address-book"></i> {job.location}
        </p>
      </div>
      <div className="job-id-experience">
        <div className="job-id">
          <p>
            <i class="fa fa-id-card"></i>
            {job.jobId}
          </p>
        </div>
        <div className="job-experience">
          <p>
            <i class="fa fa-briefcase"></i>
            {job.experience} yrs
          </p>
        </div>
      </div>
      <div className="job-time">
        <p>
          <i class="fa fa-calendar"></i> {job.workTime}
        </p>
      </div>
      <div className="job-count-salary">
        <div className="job-count">
          <p>
            <i class="fa fa-user"></i>
            {job.candidateCount} Candidates
          </p>
        </div>
        <div className="job-salary">
          <p>
            <i class="fa fa-money"></i> {job.salary} lakhs
          </p>
        </div>
      </div>
      {customButton ? (
        <div className="custom-buttons">
          <div className="custom-button">
            <button
              className="button"
              onClick={() => {
                acceptJob(job);
                history.push("/acceptedjob");
              }}
            >
              Accept
            </button>
          </div>
          <div className="custom-button">
            <button
              className="button"
              onClick={() => {
                rejectJob(job);
                history.push("/rejectedjob");
              }}
            >
              Reject
            </button>
          </div>
        </div>
      ) : null}
      {acceptedJob ? (
        <div className="job-action">
          <p style={{ color: "green" }}>Accepted</p>
        </div>
      ) : null}
      {rejectedJob ? (
        <div className="job-action">
          <p style={{ color: "red" }}>Rejected</p>
        </div>
      ) : null}
      {addCandidate ? (
        <div className="custom-buttons">
          <div className="custom-button">
            <button className="button">Add Candidates</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default JobPreview;
