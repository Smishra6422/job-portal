import { jobTypes } from "./job-types";

export const fetchLiveJobStart = () => ({
  type: jobTypes.FETCH_LIVE_JOB_START,
});

export const fetchLiveJobSuccess = (jobs) => ({
  type: jobTypes.FETCH_LIVE_JOB_SUCCESS,
  payload: jobs,
});

export const fetchLiveJobFailure = (err) => ({
  type: jobTypes.FETCH_LIVE_JOB_FAILURE,
  payload: err,
});

export const fetchAcceptedJobStart = (data) => ({
  type: jobTypes.FETCH_ACCEPTED_JOB_START,
  payload: data,
});

export const fetchAcceptedJobSuccess = (data) => ({
  type: jobTypes.FETCH_ACCEPTED_JOB_SUCCESS,
  payload: data,
});

export const fetchAcceptedJobFailure = (err) => ({
  type: jobTypes.FETCH_ACCEPTED_JOB_FAILURE,
  payload: err,
});

export const fetchRejectedJobStart = (data) => ({
  type: jobTypes.FETCH_REJECTED_JOB_START,
  payload: data,
});

export const fetchRejectedJobSuccess = (data) => ({
  type: jobTypes.FETCH_REJECTED_JOB_SUCCESS,
  payload: data,
});

export const fetchRejectedJobFailure = (err) => ({
  type: jobTypes.FETCH_REJECTED_JOB_FAILURE,
  payload: err,
});

export const addAcceptedJobStart = (jobdata) => ({
  type: jobTypes.ADD_ACCEPTED_JOB_START,
  payload: jobdata,
});

export const addRejectedJobStart = (jobdata) => ({
  type: jobTypes.ADD_REJECTED_JOB_START,
  payload: jobdata,
});
