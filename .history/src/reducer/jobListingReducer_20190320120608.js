import {
  LOADED_JOB_LISTINGS,
  LOADING_JOB_LISTINGS,
  LOADED_MORE_JOB_LISTINGS,
  SEARCH_JOB_BY_KEYWORDS
} from "../action/types";

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
        data: action.payload.data.jobs,
        page: action.payload.data.page,
        total_pages: action.payload.data.total_pages
      };

    case LOADED_MORE_JOB_LISTINGS:
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.payload.data.jobs),
        page: action.payload.data.page,
        total_pages: action.payload.data.total_pages
      };

    default:
      return state;
  }
}
