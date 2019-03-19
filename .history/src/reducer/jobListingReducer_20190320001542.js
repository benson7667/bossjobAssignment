import { LOADED_JOB_LISTINGS, LOADING_JOB_LISTINGS } from "../action/types";

const initialState = {
  isLoading: false,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_JOB_LISTINGS:
      return {
        ...state,
        isLoading: true
      };

    case LOADED_JOB_LISTINGS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      return state;
  }
}
