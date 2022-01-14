const express = require('express');
const validate = require('../../middlewares/validate');
const authPosts = require('../../middlewares/auth/posts');
const authUpdatePosts = require('../../middlewares/auth/updatePosts');
const authDeletePosts = require('../../middlewares/auth/deletePosts');
const {
  create,
  getAll,
  findById,
  update,
  deletePost,
  search,
} = require('../../controllers/blogposts');

const postsRoute = express.Router({ mergeParams: true });

postsRoute.get('/search', validate, search);
postsRoute.get('/:id', validate, findById);
postsRoute.put('/:id', validate, authUpdatePosts, update);
postsRoute.delete('/:id', validate, authDeletePosts, deletePost);
postsRoute.post('/', validate, authPosts, create);
postsRoute.get('/', validate, getAll);

module.exports = postsRoute;
