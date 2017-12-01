import types from "../actions/types";

const INITIAL_STATE = {
  tweets: [],
  newTweet: "",
  isOverLimit: false,
  charCount: 0,
};

export const MAX_TWEET_LENGTH = 15;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TWEET_LIST_SUCCESS:
      return { ...state, tweets: action.tweets };

    case types.TWEET_CREATE_SUCCESS:
      return { ...state, newTweet: "" };

    case types.TWEET_DRAFT:
      const chars = action.body.length;
      let overLimit = false;
      if (chars > MAX_TWEET_LENGTH) {
        overLimit = true;
      }
      return {
        ...state,
        newTweet: action.body,
        isOverLimit: overLimit,
        charCount: chars,
      };

    default:
      return state;
  }
};

export default { tweets: reducer };