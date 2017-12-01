import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";

import Tweeeter from "./components/tweeeter";
import { TweeeterApi } from "./lib/api";

import { Provider } from "react-redux";
import rootStore from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { getRootSaga } from "./redux/sagas";

const api = TweeeterApi();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
// const store = createStore(rootStore);

sagaMiddleware.run(getRootSaga(api));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tweeeter />
      </Provider>
    );
  }
}

export default App;
