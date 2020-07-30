const bookResolver = require("./Book");
const userResolver = require("./User");
const commentsResolver = require("./Comments");

module.exports = {
  Book: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...bookResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
    ...bookResolver.Mutation,
    ...commentsResolver.Mutation,
  },
  Subscription: {
    ...bookResolver.Subscription,
  },
};
