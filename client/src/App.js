import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import AllBooks from "./components/AllBooks";

import "./assets/Base.scss";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={AllBooks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
