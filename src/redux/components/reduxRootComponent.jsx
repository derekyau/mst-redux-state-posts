import React, { Component } from "react";

// redux components
import ReduxTweeeter from "./reduxTweeeter";
import { TweeeterApi } from "../../lib/api";

//redux setup
import { Provider } from "react-redux";
import rootStore from "../reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { getRootSaga } from "../sagas";

const api = TweeeterApi();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getRootSaga(api));

export default class ReduxRootComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxTweeeter />
      </Provider>
    );
  }
}
