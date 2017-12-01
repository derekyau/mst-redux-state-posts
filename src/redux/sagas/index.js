import { takeLatest } from "redux-saga";
import Types from "../types";
import { getTweets, createTweet, deleteTweet } from "./tweeeterSaga";

export const getRootSaga = api => {
  return function* root() {
    yield takeLatest(Types.TWEET_LIST_REQUEST, getTweets, api);
    yield takeLatest(Types.TWEET_CREATE_REQUEST, createTweet, api);
    yield takeLatest(Types.TWEET_DELETE_REQUEST, deleteTweet, api);
  };
};
