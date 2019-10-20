import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/Frontpage";
import SearchGif from "./components/SearchGif";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage}></Route>
          <Route exact path="/searchgif" component={SearchGif}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
