import { createSelector } from "reselect";

const selectJob = (state) => state.job;

export const selectLiveJob = createSelector([selectJob], (job) => job.liveJobs);

export const selectLiveJobFetching = createSelector(
  [selectJob],
  (job) => job.isFetchingLiveJobs
);

export const selectAcceptJob = createSelector(
  [selectJob],
  (job) => job.acceptedJobs
);

export const selectAcceptJobFetching = createSelector(
  [selectJob],
  (job) => job.isFetchingAcceptedJobs
);

export const selectRejectJob = createSelector(
  [selectJob],
  (job) => job.rejectedJobs
);

export const selectRejectJobFetching = createSelector(
  [selectJob],
  (job) => job.isFetchingRejectedJobs
);
