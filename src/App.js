import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadGif from "./components/UploadGif";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UploadGif />
        </Route>
      </Switch>
    </Router>
  );
}
