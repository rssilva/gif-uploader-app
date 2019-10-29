import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import FrontPage from "./components/Frontpage";
import SearchGif from "./components/SearchGif";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FrontPage}></Route>
        <Route exact path="/searchgif" component={SearchGif}></Route>
      </Switch>
    );
  }
}

export default Routes;
