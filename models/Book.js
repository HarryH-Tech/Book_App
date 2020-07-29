const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
  yearPublished: String,
  summary: String,
  image: String,
  createdAt: String,
  comments: [
    {
      content: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Book", bookSchema);
