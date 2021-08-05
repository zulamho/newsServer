const mongoose = require("mongoose");

const commSchema = mongoose.Schema({
  text: String,
  author: String,
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "News"

  } 
});

const Comment = mongoose.model("Comment", commSchema);

module.exports = Comment;
