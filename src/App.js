import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";

import { TweetInput } from "./components/tweetInput";
import { Tweet } from "./components/tweet";

class App extends Component {
  _renderTweetList() {
    return (
      <Row>
        <Col md={12}>
          <ul>
            <Tweet />
          </ul>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Grid>
        <h1>State-Posts</h1>
        <br />
        <TweetInput />
        <hr />
        {this._renderTweetList()}
      </Grid>
    );
  }
}

export default App;
