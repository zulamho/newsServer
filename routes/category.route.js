const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.post("/category", categoryController.addCategory);
router.delete("/category/id", categoryController.deleteCategory);
router.get("/category" , categoryController.getCategory)

module.exports = router;
