import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectLiveJob,
  selectLiveJobFetching,
} from "../redux/job/job-selector";

import {
  fetchLiveJobStart,
  addAcceptedJobStart,
  addRejectedJobStart,
} from "../redux/job/job-action";

import "./live-job.style.scss";
import JobPreview from "../job-preview/job-preview.component";

const LiveJob = ({
  liveJobs,
  isLiveJobFetching,
  fetchLiveJobStart,
  addAcceptedJobStart,
  addRejectedJobStart,
  history,
}) => {
  useEffect(() => {
    fetchLiveJobStart();
  }, [fetchLiveJobStart]);
  return (
    <div className="col-md-9">
      {isLiveJobFetching !== false ? (
        <h1>Loading...</h1>
      ) : (
        liveJobs.map((job) => (
          <JobPreview
            job={job}
            acceptJob={addAcceptedJobStart}
            rejectJob={addRejectedJobStart}
            customButton
            history={history}
          />
        ))
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
  addAcceptedJobStart: (data) => dispatch(addAcceptedJobStart(data)),
  addRejectedJobStart: (data) => dispatch(addRejectedJobStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveJob);
