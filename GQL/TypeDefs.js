const gql = require("graphql-tag");

module.exports = gql`
  type Book {
    bookId: ID!
    title: String!
    author: String!
    summary: String!
    yearPublished: String!
    createdAt: String!
    image: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Query {
    getBooks: [Book]
    getBook(bookId: ID!): Book
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    addBook(
      title: String!
      author: String!
      summary: String!
      yearPublished: String!
      createdAt: String!
      image: String
    ): Book!

    deleteBook(bookID: ID!): String!
  }
`;
