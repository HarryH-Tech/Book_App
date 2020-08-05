import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Register from "./components/Register";
import Login from "./components/Login";

import AllBooks from "./components/AllBooks";
import RandomBook from "./components/RandomBook";
import SearchBooks from "./components/SearchBooks";

import "./assets/Base.scss";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/all_books" component={AllBooks} />
          <Route path="/random_book" component={RandomBook} />
          <Route path="/search_books" component={SearchBooks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
