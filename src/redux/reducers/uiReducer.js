import types from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  buttonColor: "blue",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TWEET_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.TWEET_LIST_SUCCESS:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export default { ui: reducer };
