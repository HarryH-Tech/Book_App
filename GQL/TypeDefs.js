const gql = require("graphql-tag");

module.exports = gql`
  type Book {
    # bookId: ID!
    title: String!
    # author: String!
    # summary: String!
    # yearPublished: String!
    # createdAt: String!
    # image: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
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
    addBook(title: String!): Book!
    deleteBook(bookID: ID!): String!

    createComment(bookId: String!, body: String!): Book!
    deleteComment(bookId: ID!, commentId: String!): Book!

    # Works as a toggle for like/unlike
    likeBook(bookId: ID!): Book!
  }

  type Subscription {
    newBook: Book!
  }
`;
