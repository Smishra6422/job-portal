import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectAcceptJobFetching,
  selectAcceptJob,
} from "../redux/job/job-selector";

import { fetchAcceptedJobStart } from "../redux/job/job-action";

import JobPreview from "../job-preview/job-preview.component";

import "./accepted-job.style.scss";

const AcceptedJob = ({
  acceptedJob,
  isAcceptJobFetching,
  fetchAcceptedJobStart,
}) => {
  useEffect(() => {
    fetchAcceptedJobStart();
  }, [fetchAcceptedJobStart]);
  return (
    <div className="col-md-9">
      {isAcceptJobFetching !== false ? (
        <h1>Loading...</h1>
      ) : acceptedJob ? (
        acceptedJob.map((job) => <JobPreview job={job} acceptedJob />)
      ) : (
        <div>No data Found</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  acceptedJob: selectAcceptJob,
  isAcceptJobFetching: selectAcceptJobFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAcceptedJobStart: () => dispatch(fetchAcceptedJobStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedJob);
