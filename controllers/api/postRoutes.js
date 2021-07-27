const router = require('express').Router();
const { User, Post } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// POST request to create a post
//  api/posts/

// PUT request to update a post by id
// api/posts/:id

// DELETE request to remove a post by id
// api/posts/:id


module.exports = router;