import { call, put } from "redux-saga/effects";
import * as actions from "../actions/creators";

export function* getTweets(api) {
  //call the API
  const response = yield call(api.getTweets);

  // do some fancy processing, throw it into the store
  if (response.status == 200) {
    yield put(actions.tweetListSuccess(response.data));
  } else {
    yield put(actions.tweetListFailure("API Failed"));
  }
}

export function* createTweet(api, action) {
  const response = yield call(api.createTweet, action.body);

  if (response.status == 201) {
    yield put(actions.tweetCreateSuccess(response.data));
  } else {
    yield put(actions.tweetCreateFailure("API Failed"));
  }
}

export function* deleteTweet(api, action) {
  const response = yield call(api.deleteTweet, action.tweetId);

  if (response.status == 200) {
    yield put(actions.tweetDeleteSuccess(action.tweetId));
  } else {
    yield put(actions.tweetDeleteFailure("API Failed"));
  }
}
