/* eslint-disable */

import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Router>
        <Header searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route exact path="/">
            <Main searchText={searchText} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
