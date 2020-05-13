import { combineReducers } from "redux";

import jobReducer from "./job/job-reducer";

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;
