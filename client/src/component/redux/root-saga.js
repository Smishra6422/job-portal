import { all, call } from "redux-saga/effects";

import { jobSaga } from "./job/job-sagas";

export function* rootSaga() {
  yield all([call(jobSaga)]);
}
