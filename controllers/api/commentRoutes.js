const express = require("express");
const router = express.Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all comments for a post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        post_id: req.params.postId,
      },
      include: [User],
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
