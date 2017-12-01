import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  ...tweetReducer,
  ...uiReducer,
});
