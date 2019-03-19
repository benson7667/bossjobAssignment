import {
  LOADED_JOB_LISTINGS,
  LOADING_JOB_LISTINGS,
  LOADED_MORE_JOB_LISTINGS
} from "./types";
import axios from "axios";
import { Config } from "../constants";

export const setLoading = () => ({
  type: LOADING_JOB_LISTINGS
});

export const loadJobListings = () => async dispatch => {
  dispatch(setLoading());
  try {
    const res = await axios.get(
      `${Config.apis_domain}search/job_filter?size=12&query=system`
    );

    if (res.data.status_code === 200) {
      dispatch({
        type: LOADED_JOB_LISTINGS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const loadMoreJobListings = pageNumber => async dispatch => {
  console.log(pageNumber);

  dispatch(setLoading());
  try {
    const res = await axios.get(
      `${
        Config.apis_domain
      }search/job_filter?page=${pageNumber}&size=12&query=system`
    );

    if (res.data.status_code === 200) {
      dispatch({
        type: LOADED_MORE_JOB_LISTINGS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
