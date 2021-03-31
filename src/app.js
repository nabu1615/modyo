import React, { Component } from "react";
import { render } from "react-dom";

import "./styles/main.scss";

import AppRouter from "routes/AppRouter";
export default class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
