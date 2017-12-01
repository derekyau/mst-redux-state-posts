import Types from "./types";

const createAction = (type, params = null) => ({ type, ...params });

export const tweetListRequest = () => createAction(Types.TWEET_LIST_REQUEST);
export const tweetListSuccess = tweets =>
  createAction(Types.TWEET_LIST_SUCCESS, { tweets });
export const tweetListFailure = reason =>
  createAction(Types.TWEET_LIST_FAILURE, { reason });

export const tweetDeleteRequest = tweetId =>
  createAction(Types.TWEET_DELETE_REQUEST, { tweetId });
export const tweetDeleteSuccess = () =>
  createAction(Types.TWEET_DELETE_SUCCESS);
export const tweetDeleteFailure = reason =>
  createAction(Types.TWEET_DELETE_FAILURE, { reason });

export const tweetCreateRequest = body =>
  createAction(Types.TWEET_CREATE_REQUEST, { body });
export const tweetCreateSuccess = tweet =>
  createAction(Types.TWEET_CREATE_SUCCESS, { tweet });
export const tweetCreateFailure = reason =>
  createAction(Types.TWEET_CREATE_FAILURE, { reason });

export const tweetDraft = body => createAction(Types.TWEET_DRAFT, { body });
