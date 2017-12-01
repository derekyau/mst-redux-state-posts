import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
import TweetInput from "./tweetInput";
import { Tweet } from "./tweet";
import * as actions from "../redux/actions/creators";
import { Spinner } from "./spinner";

class Tweeeter extends Component {
  componentDidMount() {
    this.props.getTweets();
  }

  _onDeleteClicked = tweetId => {
    this.props.deleteTweet(tweetId);
  };

  _renderTweetList() {
    const tweetList = this.props.tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        tweet={tweet}
        onDeleteClicked={this._onDeleteClicked}
      />
    ));
    return (
      <Row>
        <Col md={12}>
          <ul>{tweetList}</ul>
        </Col>
      </Row>
    );
  }

  _renderSpinner() {
    return (
      <Row>
        <Col md={1} className="col-centered">
          <Spinner />
        </Col>
      </Row>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      <Grid>
        <h1>Redux Tweeeter</h1>
        <br />
        <TweetInput />
        <hr />
        {isFetching && this._renderSpinner()}
        {this._renderTweetList()}
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTweets: () => dispatch(actions.tweetListRequest()),
    deleteTweet: tweetId => dispatch(actions.tweetDeleteRequest(tweetId)),
  };
};

const mapStateToProps = state => {
  const { tweets } = state.tweets;
  const { isFetching } = state.ui;

  return {
    tweets: tweets || [],
    isFetching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweeeter);
