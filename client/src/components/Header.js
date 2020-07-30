import React from "react";
import { Link } from "react-router-dom";
import "../assets/components/Header.scss";

function Header() {
  return (
    <>
      <div id="header-container">
        <div id="title-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 id="title">Book List</h1>
          </Link>
        </div>
        <div id="menu-container">
          <Link to="/">All Books</Link>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
