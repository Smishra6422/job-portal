import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectLiveJob,
  selectLiveJobFetching,
} from "../redux/job/job-selector";

import { fetchLiveJobStart } from "../redux/job/job-action";

// import "./live-job.style.scss";
import JobPreview from "../job-preview/job-preview.component";

const Candidate = ({ liveJobs, isLiveJobFetching, fetchLiveJobStart }) => {
  useEffect(() => {
    fetchLiveJobStart();
  }, [fetchLiveJobStart]);
  return (
    <div className="col-md-9">
      {isLiveJobFetching !== false ? (
        <h1>Loading...</h1>
      ) : (
        liveJobs.map((job) => <JobPreview job={job} addCandidate />)
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  liveJobs: selectLiveJob,
  isLiveJobFetching: selectLiveJobFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLiveJobStart: () => dispatch(fetchLiveJobStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
