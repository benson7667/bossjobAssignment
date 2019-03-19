import { combineReducers } from "redux";
import jobListingReducer from "./popularReducer";

const rootReducer = combineReducers({
  jobListings: jobListingReducer
});

export default rootReducer;
