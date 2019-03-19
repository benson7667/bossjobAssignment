import { LOADED_JOB_LISTINGS, LOADING_JOB_LISTINGS } from "./types";
import axios from "axios";
import { Config } from "../constants";

export const setLoading = () => ({
  type: LOADING_JOB_LISTINGS
});

export const loadJobListings = () => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `${Config.apis_domain}search/job_filter?size=3&query=system`
    );

    console.log(res.data);

    if (res.data.status) {
      dispatch({
        type: LOADED_JOB_LISTINGS,
        payload: res.data.data.jobs
      });
    }
  } catch (err) {
    console.log(err);
  }
};
