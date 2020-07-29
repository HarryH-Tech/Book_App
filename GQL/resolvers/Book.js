const Book = require("../../models/Book");

module.exports = {
  Query: {
    async getBooks() {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBook(_, { bookId }) {
      console.log(bookId);
      try {
        if (!bookId.match(/^[0-9a-fA-F]{24}$/)) {
          throw new Error("Invalid ID");
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
};
