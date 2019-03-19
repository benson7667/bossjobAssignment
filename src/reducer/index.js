import { combineReducers } from "redux";
import jobListingReducer from "./jobListingReducer";

const rootReducer = combineReducers({
  jobListings: jobListingReducer
});

export default rootReducer;
