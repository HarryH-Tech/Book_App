const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config.js");

const resolvers = require("./GQL/resolvers");
const port = 4000;
const gql = require("graphql-tag");
const typeDefs = require("./GQL/TypeDefs");

const secretKey = require("./config");

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
