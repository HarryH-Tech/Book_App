const bookResolver = require("./Book");
const userResolver = require("./User");

module.exports = {
  Query: {
    ...bookResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
  },
};
