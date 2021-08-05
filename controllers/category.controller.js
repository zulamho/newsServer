const Category = require("../models/Category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Категория добавлена!");
    } catch (err) {
      res.json(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("Категория удалена!");
    } catch (err) {
      res.json(err);
    }
  },

  getCategory: async (req , res ) => {
    try{
      const data = await Category.find().lean()
      res.render("Category",{
        data
      })
    }catch (err){
      res.json(err)
    }
  }
};
