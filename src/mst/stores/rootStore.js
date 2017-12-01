import { types } from "mobx-state-tree";
import { TweetStoreModel } from "./tweetStore";

export const RootStoreModel = types.model("RootStoreModel").props({
  tweetStore: types.optional(TweetStoreModel, {}),
});
