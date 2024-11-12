// controllers/api/userRoutes.js

const path = require('path'); // Import the path module
const router = require('express').Router();
const { User } = require('../../models');
const bcryptjs = require('bcryptjs');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username: req.body.username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists. Please choose a different one.' });
    }

    // If the username is unique, create a new user
    const newUser = await User.create({
      username: req.body.username,
      password: await bcryptjs.hash(req.body.password, 10), // Using bcryptjs here
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !await bcryptjs.compare(req.body.password, user.password)) { // Using bcryptjs.compare here
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
