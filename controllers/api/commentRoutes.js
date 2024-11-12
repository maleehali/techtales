// controllers/api/commentRoutes.js

const path = require('path'); // Import the path module
const router = require('express').Router();
const { Comment } = require('../../models'); // Adjusted for root directory
const withAuth = require('../../Tech-Blog/utils/auth');

// Add a comment to a post
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;