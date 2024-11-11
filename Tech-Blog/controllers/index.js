// controllers/index.js
const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes); // Add this line to include postRoutes
router.use('/', homeRoutes);

module.exports = router;
