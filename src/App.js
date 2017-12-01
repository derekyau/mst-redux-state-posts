import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ReduxRootComponent from "./redux-components/reduxRootComponent";
import MSTRootComponent from "./mst-components/mstRootComponent";

import { Row, Col, Button, Pager } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null,
    };
  }

  _renderChoices() {
    return (
      <Row className="picker">
        <Col xs={12} className="text-center">
          <Row>
            <h1>Welcome to Tweeeter</h1>
            <em>
              <h4>Choose your state container</h4>
            </em>
          </Row>
          <Row>
            <Pager>
              <Button
                onClick={() => {
                  this.setState({ mode: "redux" });
                }}
                bsStyle="primary"
                bsSize="large"
              >
                Blue Pill (Redux)
              </Button>
              <span className="spacer" />
              <Button
                onClick={() => {
                  this.setState({ mode: "mst" });
                }}
                bsStyle="danger"
                bsSize="large"
              >
                Red Pill (MST)
              </Button>
            </Pager>
          </Row>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        {this.state.mode == null && this._renderChoices()}
        {this.state.mode == "redux" && <ReduxRootComponent />}
        {this.state.mode == "mst" && <MSTRootComponent />}
      </div>
    );
  }
}

export default App;
