const service = require('../services/postService');
const http = require('../utils/http');

function listPosts(req, res) {
  const result = service.listPosts(req.query);

  return http.sendList(res, result.data, result.meta);
}

function getPost(req, res) {
  const post = service.getPost(req.params.id);

  if (!post) {
    return http.sendError(res, 404, {
      code: 'POST_NOT_FOUND',
      message: 'Post not found'
    });
  }

  return http.sendOk(res, post);
}

function createPost(req, res) {
  const post = service.createPost(req.body);

  return http.sendCreated(res, post);
}

function likePost(req, res) {
  const post = service.likePost(req.params.id);

  if (!post) {
    return http.sendError(res, 404, {
      code: 'POST_NOT_FOUND',
      message: 'Post not found'
    });
  }

  return http.sendOk(res, post);
}

function explode(req, res) {
  try {
    service.explode();

    return http.sendOk(res, {
      message: 'Operation completed'
    });
  } catch (err) {
    console.error('Internal server error:', err.message);

    return http.sendError(res, 500, {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    });
  }
}

module.exports = {
  listPosts,
  getPost,
  createPost,
  likePost,
  explode
};