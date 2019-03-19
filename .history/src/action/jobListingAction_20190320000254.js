import { LOADED_JOB_LISTINGS, LOADING_JOB_LISTINGS } from "./types";
import axios from "axios";
import Config from "/Constants";

export const setLoading = () => ({
  type: LOADING_JOB_LISTINGS
});

export const loadJobListings = () => async dispatch => {
  try {
  } catch (err) {
    console.log(err);
  }
};
