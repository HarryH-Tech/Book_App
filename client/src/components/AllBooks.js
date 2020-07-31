import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_BOOKS } from "../../GQL/Queries";

function AllBooks(props) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div></div>;
}

export default AllBooks;
