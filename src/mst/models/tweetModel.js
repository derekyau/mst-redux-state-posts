import {
  types,
  flow,
  getEnv,
  getParent,
  getRoot,
  destroy
} from "mobx-state-tree";

export const MAX_TWEET_LENGTH = 15;
export const TWEET_MODEL_DEFAULT_STATE = { id: 0, body: "" };

export const TweetModel = types
  .model("TweetModel")
  .props({
    id: types.identifier(types.number),
    body: types.optional(types.string, "")
  })
  .actions(self => ({
    create: flow(function*() {
      const env = getEnv(self);
      const response = yield env.api.createTweet(self.body);
      return response;
    }),
    delete() {
      const { tweetStore } = getRoot(self);
      tweetStore.removeTweet(self);
    }
  }));
