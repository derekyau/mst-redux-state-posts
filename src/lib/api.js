import axios from "axios";

// delay to simulate lag time
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const TweeeterApi = () => {
  const client = axios.create({
    baseURL: "http://localhost:3000/",
  });

  const getTweets = async () => {
    // await delay(1000);
    return client.get("tweets");
  };

  const createTweet = async body => {
    await delay(10);
    return client.post("tweets", { body });
  };

  const deleteTweet = async tweetId => {
    await delay(10);
    return client.delete(`tweets/${tweetId}`);
  };

  return {
    getTweets,
    createTweet,
    deleteTweet,
  };
};
