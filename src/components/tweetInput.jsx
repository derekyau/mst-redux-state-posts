import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";

export class TweetInput extends Component {
  render() {
    return (
      <Row>
        <Col md={9} className="col-centered">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Type here..."
          />
          <br />
          <Button className="pull-right" bsStyle="primary">
            Tweet
          </Button>
        </Col>
      </Row>
    );
  }
}
