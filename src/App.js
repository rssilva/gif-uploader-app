import React from "react";
import logo from "./logo.svg";
import FrontPage from "./components/Frontpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}
