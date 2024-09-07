const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    replies: {
      type: Object,
    },
    blog_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
