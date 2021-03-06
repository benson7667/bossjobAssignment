import { LOADED_JOB_LISTINGS, LOADING_JOB_LISTINGS } from "./types";
import axios from "axios";
import { Config } from "../Constants";

export const setLoading = () => ({
  type: LOADING_JOB_LISTINGS
});

export const loadJobListings = () => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `${Config.apis_domain}search/job_filter?size=3&query=system`
    );
  } catch (err) {
    console.log(err);
  }
};
