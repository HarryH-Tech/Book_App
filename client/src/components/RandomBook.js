import React, { useEffect, useState } from "react";
import { GET_RANDOM_BOOK } from "../GQL/Queries";

const RandomBook = () => {
  const [myData, setMyData] = useState({});
  const { data, error, loading } = useQuery(GET_RANDOM_BOOK);

  useEffect(() => {
    if (data) {
      setMyData(data);
    }
  });
  return <></>;
};

export default RandomBook;
