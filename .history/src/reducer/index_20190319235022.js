import { combineReducers } from "redux";
import jobListingReducer from "./popularReducer";

const rootReducer = combineReducers({
  jobListing: jobListingReducer
});

export default rootReducer;
