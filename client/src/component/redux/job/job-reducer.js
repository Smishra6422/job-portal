import { jobTypes } from "./job-types";
// import { updateJob } from "./job-utils";

const INITIAL_STATE = {
  liveJobs: [],
  isFetchingLiveJobs: true,
  acceptedJobs: [],
  isFetchingAcceptedJobs: true,
  rejectedJobs: [],
  isFetchingRejectedJobs: true,
  error: "",
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case jobTypes.FETCH_LIVE_JOB_START:
      return {
        ...state,
        isFetchingLiveJobs: true,
        liveJobs: [],
      };
    case jobTypes.FETCH_LIVE_JOB_SUCCESS:
      return {
        ...state,
        isFetchingLiveJobs: false,
        liveJobs: state.liveJobs.concat(action.payload),
      };
    case jobTypes.FETCH_LIVE_JOB_FAILURE:
      return {
        ...state,
        isFetchingLiveJobs: false,
        liveJobs: [],
        error: action.payload,
      };

    case jobTypes.FETCH_ACCEPTED_JOB_START:
      return {
        ...state,
        isFetchingAcceptedJobs: true,
        acceptedJobs: [],
      };
    case jobTypes.FETCH_ACCEPTED_JOB_SUCCESS:
      return {
        ...state,
        isFetchingAcceptedJobs: false,
        acceptedJobs: state.acceptedJobs.concat(action.payload),
      };
    case jobTypes.FETCH_ACCEPTED_JOB_FAILURE:
      return {
        ...state,
        isFetchingAcceptedJobs: false,
        acceptedJobs: [],
        error: action.payload,
      };

    case jobTypes.FETCH_REJECTED_JOB_START:
      return {
        ...state,
        isFetchingRejectedJobs: true,
        rejectedJobs: [],
      };
    case jobTypes.FETCH_REJECTED_JOB_SUCCESS:
      return {
        ...state,
        isFetchingRejectedJobs: false,
        rejectedJobs: state.rejectedJobs.concat(action.payload),
      };
    case jobTypes.FETCH_REJECTED_JOB_FAILURE:
      return {
        ...state,
        isFetchingRejectedJobs: false,
        rejectedJobs: [],
        error: action.payload,
      };

    case jobTypes.ADD_ACCEPTED_JOB_START:
      return {
        ...state,
      };

    default:
      return {
        state,
      };
  }
};

export default jobReducer;
