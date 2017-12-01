import React, { Component } from "react";

import MSTTweeeter from "./mstTweeeter";
import { TweeeterApi } from "../../lib/api";
import { Provider } from "mobx-react";

import { RootStoreModel } from "../stores/rootStore";

const api = TweeeterApi();
const initialState = {};
const rootStore = RootStoreModel.create(initialState, { api });

export default class MSTRootComponent extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <MSTTweeeter />
      </Provider>
    );
  }
}
