const Book = require("../../models/Book");
const checkAuth = require("../../utils/CheckAuth");
const { AuthenticationError, UserInputError } = require("apollo-server");

module.exports = {
  Query: {
    async getBooks() {
      try {
        const books = await Book.find().sort({ createdAt: -1 });
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBook(_, { bookId }) {
      console.log(bookId);
      try {
        if (!bookId.match(/^[0-9a-fA-F]{24}$/)) {
          throw new Error("Invalid Book ID");
        }

        const book = await Book.findById(bookId);
        if (book) {
          return book;
        } else {
          throw new Error("Book Not Found.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async addBook(_, { title }, context) {
      const user = checkAuth(context);

      const newBook = new Book({
        title,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const book = await newBook.save();
      console.log(book);

      context.pubsub.publish("NEW_BOOK", {
        newBook: book,
      });
      return book;
    },

    async deleteBook(_, { bookId }, context) {
      const user = checkAuth(context);

      try {
        const book = await Book.findById(bookId);
        if (user.username === book.username) {
          await book.delete();
          return "Post deleted successfully";
        } else {
          throw new AuthenticationError("Action not permitted.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async likeBook(_, { bookId }) {
      const { username } = checkAuth(context);

      const book = await Book.findById(bookId);

      if (book) {
        if (book.likes.find((like) => like.username === username)) {
          //Book already liked, unlike it
          book.likes.filter((like) => like.username !== username);
          await book.save();
        } else {
          //Not liked, like book
          book.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }

        await book.save();
        return book;
      } else {
        throw new UserInputError("Book not found");
      }
    },
  },

  Subscription: {
    newBook: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_BOOK"),
    },
  },
};
