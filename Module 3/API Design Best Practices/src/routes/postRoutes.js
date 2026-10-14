const express = require('express');
const controller = require('../controllers/postController');

const router = express.Router();

// Get all posts
router.get('/posts', controller.listPosts);

// Get a single post
router.get('/posts/:id', controller.getPost);

// Create a post
router.post('/posts', controller.createPost);

// Like a post
router.post('/posts/:id/likes', controller.likePost);

module.exports = router;