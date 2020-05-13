import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { jobTypes } from "./job-types";

import {
  fetchLiveJobStart,
  fetchLiveJobSuccess,
  fetchLiveJobFailure,
  fetchAcceptedJobSuccess,
  fetchAcceptedJobFailure,
  fetchRejectedJobFailure,
  fetchRejectedJobSuccess,
} from "./job-action";

export function* fetchLiveJobAsync() {
  try {
    const fetchResult = yield call(axios, "http://localhost:5002/getjob");
    const Jobs = yield fetchResult.data;
    yield put(fetchLiveJobSuccess(Jobs));
  } catch (error) {
    yield put(fetchLiveJobFailure(error));
  }
}

export function* fetchAcceptedJobAsync() {
  try {
    const fetchResult = yield call(axios, "http://localhost:5002/getacceptjob");
    const Jobs = yield fetchResult.data;
    yield put(fetchAcceptedJobSuccess(Jobs));
  } catch (error) {
    yield put(fetchAcceptedJobFailure(error));
  }
}

export function* fetchRejectedJobAsync() {
  try {
    const fetchResult = yield call(axios, "http://localhost:5002/getrejectjob");
    const Jobs = yield fetchResult.data;
    yield put(fetchRejectedJobSuccess(Jobs));
  } catch (error) {
    yield put(fetchRejectedJobFailure(error));
  }
}

export function* fetchLiveJobRestart() {
  try {
    yield put(fetchLiveJobStart());
  } catch (error) {
    yield put(fetchLiveJobFailure(error));
  }
}

export function* addAcceptedJobAsync({ payload }) {
  try {
    const fetchResult = yield call(
      axios.post,
      "http://localhost:5002/addacceptjob",
      payload
    );
    // console.log(fetchResult);
    alert(fetchResult.data + " Job Added to Accecpted Category !");
    yield call(fetchLiveJobRestart);
  } catch (error) {
    alert(error);
  }
}

export function* addRejectedJobAsync({ payload }) {
  try {
    const fetchResult = yield call(
      axios.post,
      "http://localhost:5002/addrejectjob",
      payload
    );
    // console.log(fetchResult);
    alert(fetchResult.data + " Job Added to Rejected Category !");
    yield call(fetchLiveJobRestart);
  } catch (error) {
    alert(error);
  }
}

export function* fetchLiveJobStarts() {
  yield takeLatest(jobTypes.FETCH_LIVE_JOB_START, fetchLiveJobAsync);
}

export function* fetchAcceptedJobStart() {
  yield takeLatest(jobTypes.FETCH_ACCEPTED_JOB_START, fetchAcceptedJobAsync);
}

export function* fetchRejectedJobStarts() {
  yield takeLatest(jobTypes.FETCH_REJECTED_JOB_START, fetchRejectedJobAsync);
}

export function* addAcceptedJobStart() {
  yield takeLatest(jobTypes.ADD_ACCEPTED_JOB_START, addAcceptedJobAsync);
}

export function* addRejectedJobStart() {
  yield takeLatest(jobTypes.ADD_REJECTED_JOB_START, addRejectedJobAsync);
}

export function* jobSaga() {
  yield all([
    call(fetchLiveJobStarts),
    call(fetchAcceptedJobStart),
    call(fetchRejectedJobStarts),
    call(addAcceptedJobStart),
    call(addRejectedJobStart),
  ]);
}
