import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query {
    getBooks {
      title
      author
      yearPublished
      summary
      image
    }
  }
`;

export const GET_RANDOM_BOOK = gql`
  query {
    getRandomBook {
      title
      author
      yearPublished
      summary
      image
    }
  }
`;
