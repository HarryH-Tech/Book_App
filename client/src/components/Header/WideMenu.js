import React from "react";
import { Link } from "react-router-dom";

function WideMenu() {
  return (
    <div id="wide-menu-container">
      <h3>
        <Link to="/all_books" class="link">
          All Books
        </Link>
      </h3>

      <h3>
        <Link to="/search_books" class="link">
          Search Books
        </Link>
      </h3>

      <h3>
        <Link to="/random_book" class="link">
          Random Book
        </Link>
      </h3>
    </div>
  );
}

export default WideMenu;
