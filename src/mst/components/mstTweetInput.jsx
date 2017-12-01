import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";

import { inject, observer } from "mobx-react";
import { MAX_TWEET_LENGTH } from "../models/tweetModel";
import { Spinner } from "./spinner";

@inject("tweetStore")
@observer
export default class MSTTweetInput extends Component {
  _handleButtonClicked = () => {
    this.props.tweetStore.publishNewTweet();
  };

  _handleTextAreaChanged = value => {
    this.props.tweetStore.draftNewTweet(value);
  };

  render() {
    const {
      newTweet,
      previewText,
      errorClass,
      charCount,
      buttonDisabled,
      isLoading,
    } = this.props.tweetStore;

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
            value={newTweet.body}
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
                bsStyle="danger"
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
