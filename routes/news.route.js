const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews);
router.delete("/news/:id", newsController.deleteNews);
router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.certainNews);
router.get("/news/category:id", newsController.categoryNews);
router.get("/news/comments/id", newsController.deleteComment);

module.exports = router;
