import React, { Component } from "react";

import MSTTweeeter from "./mstTweeeter";
import { TweeeterApi } from "../../lib/api";
import { Provider } from "mobx-react";

import { RootStoreModel } from "../stores/rootStore";
import { wiretap, inspect } from "mobx-wiretap/mst";

const api = TweeeterApi();
const initialState = {};
const rootStore = RootStoreModel.create(initialState, { api });
wiretap("Tweeeter");
inspect("RootStore", rootStore);

export default class MSTRootComponent extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <MSTTweeeter />
      </Provider>
    );
  }
}
