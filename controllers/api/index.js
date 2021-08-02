// BRING IN EXPRESS ROUTER
const router = require('express').Router();

// ACCESS TO USER, COMMENT AND POST ROUTES
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

// ENABLE USER, COMMENT, AND POST ROUTES
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

// EXPORT ROUTER FOR USE IN APPLICATION
module.exports = router;
