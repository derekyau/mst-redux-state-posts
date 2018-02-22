import { types, flow, getEnv, destroy, detach } from "mobx-state-tree";
import { TweetModel } from "../models/tweetModel";
import {
  TWEET_MODEL_DEFAULT_STATE,
  MAX_TWEET_LENGTH
} from "../models/tweetModel";
import { toJS } from "mobx";

export const TweetStoreModel = types
  .model("TweetStoreModel")
  .props({
    tweets: types.optional(types.array(TweetModel), []),
    newTweet: types.optional(TweetModel, TWEET_MODEL_DEFAULT_STATE),
    isFetching: types.optional(types.boolean, false),
    isLoading: types.optional(types.boolean, false)
  })
  .views(self => ({
    get previewText() {
      return self.newTweet.body || "Start typing below...";
    },
    get charCount() {
      return self.newTweet.body.length;
    },
    get isOverLimit() {
      return self.charCount > MAX_TWEET_LENGTH;
    },
    get errorClass() {
      return self.isOverLimit ? "red" : "";
    },
    get buttonDisabled() {
      return self.isOverLimit || self.charCount == 0;
    }
  }))
  .actions(self => ({
    draftNewTweet(val) {
      self.newTweet.body = val;
    },

    removeTweet: flow(function*(tweet) {
      const env = getEnv(self);
      const response = yield env.api.deleteTweet(tweet.id);
      if (response.status == 200) {
        self.tweets.remove(tweet);
      }
    }),

    publishNewTweet: flow(function*() {
      self.isLoading = true;
      const response = yield self.newTweet.create();
      if (response.status == 201) {
        self.isLoading = false;
        self.tweets.push(response.data);
        self.newTweet = TWEET_MODEL_DEFAULT_STATE;
      } else {
        // error
      }
    }),

    getTweets: flow(function*() {
      const env = getEnv(self);
      self.isFetching = true;

      const response = yield env.api.getTweets();
      if (response.status == 200) {
        self.isFetching = false;
        self.tweets = response.data;
      } else {
        //error
      }
    })
  }))
  .actions(self => ({
    afterCreate() {
      self.getTweets();
    }
  }));
