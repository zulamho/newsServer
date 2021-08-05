const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        text: req.body.text,
        author: req.body.author,
        newsId: req.body.newsId,
      });
      res.json("Комм добавлен!")
    } catch (err) {
      res.json(err);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.body.id);
      res.json("Комментарий удален!");
    } catch (err) {
      res.json(err);
    }
  },

  getComment: async (req , res ) => {
    try{
      const comment = await Comment.find().lean()
      res.json(comment)
    }catch (err) {
      res.json(err)
    }
  }
};
