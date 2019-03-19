import { LOADED_JOB_LISTINGS, LOADING_JOB_LISTINGS } from "../action/types";

const initialState = {
  authData: null,
  loggingIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };

    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        authData: action.payload
      };

    case LOGGED_OUT:
      return {
        ...state,
        authData: null
      };

    default:
      return state;
  }
}
