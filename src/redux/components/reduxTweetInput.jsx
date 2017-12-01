import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/creators";
import { MAX_TWEET_LENGTH } from "../reducers/tweetReducer";
import { Spinner } from "./spinner";

class ReduxTweetInput extends Component {
  _handleButtonClicked = () => {
    const { newTweet: body } = this.props;
    this.props.createTweet(body);
  };

  _handleTextAreaChanged = value => {
    this.props.tweetDraft(value);
  };

  render() {
    const {
      newTweet,
      previewText,
      hasErrors,
      charCount,
      buttonDisabled,
      isLoading,
    } = this.props;
    const errorClass = hasErrors ? "red" : "";

    return (
      <Row>
        <Col md={9} className="col-centered">
          <h3>Tweet Preview</h3>
          <Well>{previewText}</Well>

          <p>
            Character Count (Max {MAX_TWEET_LENGTH}): {charCount}
          </p>
          <textarea
            onChange={e => this._handleTextAreaChanged(e.target.value)}
            value={newTweet}
            className={`form-control ${errorClass}`}
            rows="3"
            placeholder="Type here..."
          />
          <br />
          <div className="pull-right">
            {isLoading ? (
              <Spinner />
            ) : (
              <Button
                onClick={this._handleButtonClicked}
                disabled={buttonDisabled}
                bsStyle="primary"
              >
                Tweet
              </Button>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTweet: body => dispatch(actions.tweetCreateRequest(body)),
    tweetDraft: body => dispatch(actions.tweetDraft(body)),
  };
};

const mapStateToProps = state => {
  const { newTweet, charCount } = state.tweets;
  const { isLoading } = state.ui;
  // doesn't really belong in the reducer? though it could be there? since reducers seem to be more for data, but I suppose it could be moved there
  const previewText = newTweet || "Start typing below...";
  const hasErrors = state.tweets.isOverLimit;
  const buttonDisabled = hasErrors || newTweet.length == 0;

  return {
    newTweet,
    previewText,
    hasErrors,
    charCount,
    buttonDisabled,
    isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTweetInput);
