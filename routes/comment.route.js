const { Router } = require("express");
const { commentController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentController.addComment);
router.delete("/comment/id", commentController.deleteComment);
router.get('/comment', commentController.getComment)

module.exports = router;
