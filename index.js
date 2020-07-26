const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config.js");

const Book = require("./models/Book");
// const User = require("./models/User");
const port = 4000;
const gql = require("graphql-tag");

const typeDefs = gql`
  type Book {
    id: ID!
    author: String
    summary: String
    yearPublished: String
    createdAt: String
    image: String
  }
  type Query {
    getBooks: [Book]
  }
`;

const resolvers = {
  Query: {
    async getBooks() {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`MongoDB connected to ${MONGODB}`);
    return server.listen({ port });
  })
  .then((res) => {
    console.log(`Listening on port ${res.url}`);
  });
