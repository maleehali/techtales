// controllers/homeRoutes.js

const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render the homepage with all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }]
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts: postData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render a specific post with comments
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, include: [User] }
      ]
    });
    const postData = post.get({ plain: true });
    res.render('post', { post: postData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the dashboard with the user's posts
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id }
    });
    const postData = userPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts: postData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
