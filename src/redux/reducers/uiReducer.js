import types from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  isLoading: false,
  buttonColor: "blue",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TWEET_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.TWEET_LIST_SUCCESS:
      return { ...state, isFetching: false };

    case types.TWEET_CREATE_REQUEST:
      return { ...state, isLoading: true };

    case types.TWEET_CREATE_SUCCESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default { ui: reducer };
