const News = require("../models/News.model");
const Comment = require("../models/Comment.model")
const Category = require("../models/Category.model")


module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      });
      res.json("Новость добавлена!");
    } catch (err) {
      res.json(err);
    }
  },
  deleteNews: async (res, req) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("Новость удалена!");
    } catch (err) {
      res.json(err);
    }
  },

  getNews: async (req, res) => {
    try {
      const data = await News.find().populate("comment").lean();
      const category = await Category.find().lean()
      res.render("news" , {
        data,
        category
      })
    } catch (err) {
      res.json(err);
    }
  },

  certainNews: async (req, res) => {
    try {
      const singleNews = await News.findById(req.params.id).lean();
      const comments = await Comment.find().lean()
      res.render("single-news" , {
        singleNews,
        comments

      });
    } catch (err) {
      res.json(err);
    }
  },

  categoryNews: async (req, res) => {
    try {
      const data = await News.find({
        category: req.params.id,
      });
      res.render("categories");
    } catch (err) {
      res.json(err);
    }
  },

 /* addCommentNews: async (req, res) => {
    try {
      await News.create({
        name: req.body.name,
        text: req.body.text,
        userId: req.body.userId,
      });
      res.json("Комментарий был добавлен!");
    } catch (err) {
      res.json(err);
    }
  }, */

  deleteComment: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален!");
    } catch (err) {
      res.json(err);
    }
  },
};
