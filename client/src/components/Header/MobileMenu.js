import React from "react";
import { Link } from "react-router-dom";

import "../../assets/components/HeaderMenu.scss";

function Menu({ open, setOpen }) {
  return (
    <>
      {open && (
        <div id="mobile-menu-container" open={open}>
          <Link to="/" class="mobile-link" onClick={() => setOpen(false)}>
            All Books
          </Link>

          <Link
            to="/search_books"
            class="mobile-link"
            onClick={() => setOpen(false)}
          >
            Search Books
          </Link>

          <Link
            to="/random_book"
            class="mobile-link"
            onClick={() => setOpen(false)}
          >
            Random Book
          </Link>
        </div>
      )}
    </>
  );
}

export default Menu;
