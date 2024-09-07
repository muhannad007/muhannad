const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    reply_name: {
      type: String,
      required: true,
    },
    reply: {
      type: String,
      required: true,
    },
    comment_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reply = mongoose.model("replie", replySchema);

module.exports = Reply;
