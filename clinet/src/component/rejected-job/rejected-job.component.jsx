import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectRejectJob,
  selectRejectJobFetching,
} from "../redux/job/job-selector";

import { fetchRejectedJobStart } from "../redux/job/job-action";

import JobPreview from "../job-preview/job-preview.component";

import "./rejected-job.style.scss";

const RejectedJob = ({
  rejectedJob,
  isRejectJobFetching,
  fetchRejectedJobStart,
}) => {
  useEffect(() => {
    fetchRejectedJobStart();
  }, [fetchRejectedJobStart]);
  return (
    <div className="col-md-9">
      {isRejectJobFetching !== false ? (
        <h1>Loading...</h1>
      ) : rejectedJob ? (
        rejectedJob.map((job) => <JobPreview job={job} rejectedJob />)
      ) : (
        <div>No data Found</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  rejectedJob: selectRejectJob,
  isRejectJobFetching: selectRejectJobFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRejectedJobStart: () => dispatch(fetchRejectedJobStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RejectedJob);
