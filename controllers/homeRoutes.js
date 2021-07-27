const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all or certain number of blog posts with post title, associated user_id and date created for homepage
router.get('/', async (req, res) => {
// FindAll of the posts

})

// GET one post by id with post title, text, creator's username, and date created
// include comments
router.get('/posts/:id', withAuth, async (req, res) => {

})

// GET request at /users/:id
// get all user's affiliated posts (for dashboard)

module.exports = router;