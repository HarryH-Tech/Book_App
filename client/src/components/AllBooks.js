import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_BOOKS } from "../GQL/Queries";

import "../assets/components/AllBooks.scss";

function AllBooks(props) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  console.log(data);
  if (loading)
    return (
      <div className="loading">
        <div class="spinner">
          <span class="spinner-inner-1"></span>
          <span class="spinner-inner-2"></span>
          <span class="spinner-inner-3"></span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="error-message">
        Sorry <br />
        There was an error:
        <br /> <br />
        {error.message}
      </div>
    );

  return (
    <>
      <div className="books-container">
        {data &&
          data.getBooks.map((book) => {
            return (
              <div className="grid-item">
                <h2>{book.title}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBooks;
