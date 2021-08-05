const mongoose = require("mongoose");

const newsSchems = mongoose.Schema({
  title: String,
  text: String,
  category: String,
});

const News = mongoose.model("News", newsSchems);

module.exports = News;
