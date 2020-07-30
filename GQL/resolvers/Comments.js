const { AuthenticationError, UserInputError } = require("apollo-server");

const checkAuth = require("../../utils/CheckAuth");
const Book = require("../../models/Book");

module.exports = {
  Mutation: {
    createComment: async (_, { bookId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "Comment must not be empty",
          },
        });
      }

      const book = Book.findById(bookId);

      if (book) {
        book.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });

        await book.save();
        return book;
      } else throw new UserInputError("Book not found");
    },

    async deleteComment(_, { bookId, commentId }, context) {
      const { username } = checkAuth(context);

      const book = await Book.findById(bookId);

      if (book) {
        const commentIndex = post.comments.findIndex(
          (comment) => comment.id === commentId
        );

        if (book.comments[commentIndex].username === username) {
          book.comments.splice(commentIndex, 1);
          await book.save();
          return book;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
